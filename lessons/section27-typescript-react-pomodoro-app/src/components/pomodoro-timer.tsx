import { useEffect, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { Button } from './button';
import { Timer } from './timer';

// Tipagem para as nossas props
interface PomodoroProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer({ pomodoroTime, shortRestTime, longRestTime }: PomodoroProps) { // Destructuring
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false); // Verifica se está contando ou não

  //! O ideal seria usar o State Pattern
  const [isWorking, setIsWorking] = useState(false);
  const [isResting, setIsResting] = useState(false);

  //! Não é indicado manipular o DOM diretamente
  useEffect(() => {
    if (isWorking) { document.body.classList.add('working'); }
    if (isResting) { document.body.classList.remove('working'); }
  }, [isWorking, isResting]);

  // Nosso hook personalizado
  useInterval(() => {
    // Usando o state updater (prevTime) do hook useState nativo do React
    setMainTime(prevTime => prevTime - 1);
  }, timeCounting ? 1000 : null); // Se for null, o contador não roda

  const configureWork = () => {
    setTimeCounting(true);
    setIsWorking(true);
    setIsResting(false);

    setMainTime(pomodoroTime); // Reinicia o timer
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setIsWorking(false);
    setIsResting(true);

    // Seta o tempo do pomodoro para desconso longo ou curto a depender do parâmetro recebido
    setMainTime(long ? longRestTime : shortRestTime);
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
        <p>Testando: Lorem ipsum dolor, sit.</p>
        <p>Testando: Lorem ipsum dolor, sit.</p>
        <p>Testando: Lorem ipsum dolor, sit.</p>
      </div>

    </div>
  );
}
