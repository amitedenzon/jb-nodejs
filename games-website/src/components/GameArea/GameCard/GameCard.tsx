import "./GameCard.css";
import imageSource from "../../../Assets/mascot.png";

export function GameCard(): JSX.Element {

    const discount = 20; //backend demo

    return (
        <div className="GameCard">
            <p>Amazing discount!</p>
            <span>{discount}% on all games!</span>
            <br />
            <br />
            <img src={imageSource} />
        </div>
    );
}