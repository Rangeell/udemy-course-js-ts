import { useEffect, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { Button } from './button';
import { Timer } from './timer';

// Audios
import bellStart from '../sounds/src_sounds_bell-start.mp3';
import bellSFinish from '../sounds/src_sounds_bell-finish.mp3';
import { secondsToTime } from '../utils/seconds-to-time';

const startWorkingAudio = new Audio(bellStart);
const stopWorkingAudio = new Audio(bellSFinish);

// Tipagem para as props do component
interface PomodoroProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer({ pomodoroTime, shortRestTime, longRestTime, cycles }: PomodoroProps) { // Destructuring
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false); // Verifica se está contando ou não
  const [cycleManager, setCycleManager] = useState(new Array(cycles - 1).fill(true));
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  //! O ideal seria usar o State Pattern
  const [isWorking, setIsWorking] = useState(false);
  const [isResting, setIsResting] = useState(false);

  //! Não é indicado manipular o DOM diretamente
  useEffect(() => {
    if (isWorking) { document.body.classList.add('working'); }
    if (isResting) { document.body.classList.remove('working'); }
  }, [isWorking, isResting]);

  // Meu hook personalizado
  useInterval(() => {
    if (mainTime > 1) {
      setMainTime(prevTime => prevTime - 1); // Usando o state updater (prevTime) do hook useState nativo do React
      return; // Não passa dessa linha se o contador não zerou
    }

    // Se o tempo zerou, (mainTime era 1 e passou para 0)
    if (isWorking) {
      if (cycleManager.length > 0) { // Significa que a pessoa ainda está ganhando descansos curtos
        configureRest(false); // False para o descanso longo
        setCycleManager(prev => prev.slice(0, -1)); // Remove 1 elemento de forma imutável criando um novo array
      } else {
        configureRest(true); // True para o descanso longo
        setCycleManager(new Array(cycles - 1).fill(true)); // Reseta a contagem de ciclos para a próxima rodada
        setCompletedCycles(completedCycles + 1);
      }
    }

    if (isWorking) setNumberOfPomodoros(numberOfPomodoros + 1);

    // Volta para o modo de trabalho se estiver no modo descanso (após zerar o tempoo)
    if (isResting) configureWork();

  }, timeCounting ? 1000 : null); // Se for null, o contador não roda

  const configureWork = () => {
    setTimeCounting(true);
    setIsWorking(true);
    setIsResting(false);

    setMainTime(pomodoroTime); // Reinicia o timer
    startWorkingAudio.play();
  };

  function configureRest(long: boolean) {
    setTimeCounting(true);
    setIsWorking(false);
    setIsResting(true);

    // Seta o tempo do pomodoro para desconso longo ou curto a depender do parâmetro recebido
    setMainTime(long ? longRestTime : shortRestTime);

    stopWorkingAudio.play();
  };

  return (
    <div className='pomodoro'>
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />

      <div className='controls'>
        <Button
          text='Work'
          onClick={() => configureWork()}>
        </Button>

        <Button
          text='Rest'
          onClick={() => configureRest(false)}>
        </Button>

        <Button
          text={timeCounting ? 'Pause' : 'Play'}

          // Se não estiver trabalhando e nem descansando add a classe
          className={!isWorking && !isResting ? 'hidden' : ''}
          onClick={() => setTimeCounting(!timeCounting)}>
        </Button>
      </div>

      <div className="details">
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </div>

    </div>
  );
}
