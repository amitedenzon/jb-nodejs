import "./Home.css";
import img from "../../../Assets/images/mascot_top text.png";

export function Home(): JSX.Element {
	return (
		<div className="Home">
			<img src={img} />
		</div>
	);
}
