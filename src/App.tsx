import { useState } from "react";

function App() {
  return (
    <>
      <Board></Board>
    </>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {}

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
      </div>
      ;
    </>
  );
}

function Square(value: any, onSquareClick: undefined) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default App;
