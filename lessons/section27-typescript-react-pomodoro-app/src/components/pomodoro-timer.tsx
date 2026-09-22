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

export function PomodoroTimer({ pomodoroTime }: PomodoroProps) { // Destructuring
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false); // Verifica se está contando ou não
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    if (isWorking) { //! Não é indicado manipular o DOM diretamente
      document.body.classList.add('working');
    }
  }, [isWorking]);

  // Nosso hook personalizado
  useInterval(() => {
    // Usando o state updater (prevTime) do hook useState nativo do React
    setMainTime(prevTime => prevTime - 1);
  }, timeCounting ? 1000 : null); // Se for null, o contador não roda

  const configureWork = () => {
    setTimeCounting(true);
    setIsWorking(!isWorking);
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
          text='teste'
          onClick={() => console.log(1)}>
        </Button>

        <Button
          text={timeCounting ? 'Pause' : 'Play'}
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
