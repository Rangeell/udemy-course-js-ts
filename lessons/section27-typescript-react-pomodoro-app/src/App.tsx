import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
  return (
    <div className='container'>
      <PomodoroTimer
        pomodoroTime={10}
        shortRestTime={2}
        longRestTime={10}
        cycles={4} />
    </div>
  );
}

export default App;
