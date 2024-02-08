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

  return <div className="board-row">{squares}</div>;
}

function Square() {
  const [value, setValue] = useState<null | string>(null);

  function handleClick() {
    if (value != null) {
      return;
    }

    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default App;
