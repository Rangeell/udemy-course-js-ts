import { useState } from 'react';
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

  // Nosso hook personalizado
  useInterval(() => {
    // Usando o state updater (prevTime) do hook useState nativo do React
    setMainTime(prevTime => prevTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />

      <div className='controls'>
        <Button
          text='teste'
          onClick={() => console.log(1)}>
        </Button>
        <Button
          text='teste'
          onClick={() => console.log(1)}>
        </Button>
        <Button
          text='teste'
          onClick={() => console.log(1)}>
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
