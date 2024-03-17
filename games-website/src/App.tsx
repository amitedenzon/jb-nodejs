import './App.css';
import { GameCard } from './components/GameArea/GameCard/GameCard';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our games website</h1>
      <p>Here you can find many games</p>
      <GameCard/>
    </div>
  );
}

export default App;
