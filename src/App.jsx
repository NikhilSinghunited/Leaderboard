import { useState } from 'react';
import Board from './components/Board';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Board>show details</Board>
        <Profile />
      </div>
    </>
  );
}

export default App;
