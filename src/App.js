import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/html-1.png" },
  { src: "/img/css-1.png" },
  { src: "/img/javascript-1.png" },
  { src: "/img/python-1.png" },
  { src: "/img/php-1.png" },
  { src: "/img/react-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Developer Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
