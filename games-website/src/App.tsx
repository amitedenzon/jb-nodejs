import "./App.css";
import { Staff } from "./Components/EmployeeArea/Staff/Staff";
import { BestSeller } from "./Components/GameArea/BestSeller/BestSeller";
import { GameCard } from "./Components/GameArea/GameCard/GameCard";
import { Sale } from "./Components/GameArea/Sale/Sale";
import { GameList } from "./Components/GamesArea/GameList/GameList";
import { Copyright } from "./Components/LayoutArea/Copyright/Copyright";
import { Clock } from "./Components/SharedArea/Clock/Clock";

function App() {
	return (
		<div className="App">
			<h1>Welcome to our games website</h1>
			<p>Here you can find many games</p>
			<Clock />
			<GameCard />
			<GameList />
			<Staff />
			<BestSeller />
			<Sale />
			<Copyright />
		</div>
	);
}

export default App;
