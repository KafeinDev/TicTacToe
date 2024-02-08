import { useState } from "react";

function App() {
  return (
    <>
      <Board></Board>
    </>
  );
}

function Board() {
  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows[i] = Row();
  }

  return <div className="board">{rows}</div>;
}

function Row() {
  const squares = [];
  for (let i = 0; i < 3; i++) {
    squares[i] = Square();
  }

  return <div className="row">{squares}</div>;
}

function Square() {
  const [state, setState] = useState(false);

  function handleClick(props: Props) {
    setState(!state);
  }

  return <button className="square" onClick={handleClick}></button>;
}

export default App;
