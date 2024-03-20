import img from "../../../Assets/images/mascot_top text.png";
import useTitle from "../../../Utils/useTitle";
import "./Home.css";

export function Home(): JSX.Element {
	useTitle("Home");

	return (
		<div className="Home">
			<img src={img} />
		</div>
	);
}
