import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { Button } from './button';
import { Timer } from './timer';

// Tipagem para as nossas props
interface PomodoroProps {
  defaultPomodoroTime: number
}

export function PomodoroTimer({ defaultPomodoroTime }: PomodoroProps) { // Destructuring
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);

  // Nosso hook personalizado
  useInterval(() => {
    // Usando o state updater (prevTime) do hook useState nativo do React
    setMainTime(prevTime => prevTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />

      <Button
        text='teste'
        onClick={() => console.log(1)}>
      </Button>
    </div>
  );
}
