import zeroLef from './zero-left';

export function secondsToMinutes(seconds: number): string {
  const min = zeroLef((seconds / 60) % 60); // resto da divisão port 60 da conta "seconds/60"
  const sec = zeroLef(seconds % 60); // resto da divisão por 60

  return `${min}:${sec}`;
}
