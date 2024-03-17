import './App.css';
import { Staff } from './Components/EmployeeArea/Staff/Staff';
import { GameCard } from './Components/GameArea/GameCard/GameCard';
import { Sale } from './Components/GameArea/Sale/Sale';
import { Copyright } from './Components/LayoutArea/Copyright/Copyright';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our games website</h1>
      <p>Here you can find many games</p>
      <GameCard />
      <Staff />
      <br />
      <Sale />
      <Copyright />
    </div>
  );
}

export default App;
