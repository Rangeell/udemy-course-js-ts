import { secondsToMinutes } from '../utils/seconds-to-minutes';

interface TimerProps {
  mainTime: number;
}

export function Timer({ mainTime }: TimerProps): React.JSX.Element {
  return (
    <div className="timer">
      {secondsToMinutes(mainTime)}
    </div>
  );
}
