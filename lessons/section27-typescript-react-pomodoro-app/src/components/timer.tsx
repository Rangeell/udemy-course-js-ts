import { secondsToTime } from '../utils/seconds-to-time';

interface TimerProps {
  mainTime: number;
}

export function Timer({ mainTime }: TimerProps): React.JSX.Element {
  return (
    <div className="timer">
      {secondsToTime(mainTime)}
    </div>
  );
}
