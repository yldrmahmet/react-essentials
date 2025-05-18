import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// random generate number in [0 ,max]
// Math.random function create random number in [0,1)
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  // description = "Fundamental" or "Crucial" or "Core"
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
