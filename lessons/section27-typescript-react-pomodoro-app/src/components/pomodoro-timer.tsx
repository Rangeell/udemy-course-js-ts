import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

// Tipagem para as nossas props
interface Props {
  defaultPomodoroTime: number
}

export function PomodoroTimer({ defaultPomodoroTime }: Props) { // Destructuring
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);

  // Nosso hook personalizado
  useInterval(() => {
    // Usando o state updater (prevTime) do hook useState nativo do React
    setMainTime(prevTime => prevTime - 1);
  }, 1000);

  return <div>Hello World! {mainTime}</div>;
}
