import { useState,useEffect } from "react";
import Square from "./Square";
import toast from "react-hot-toast";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    let nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status = `Player ${xIsNext ? "X" : "O"}’s Turn`
  


useEffect(() => {
  if (winner) {
  toast(`🏆 Player ${winner} is the Winner!`, {
  icon: "🎮",
  style: {
    background: "#E6C3A1",
    color: "#7C2D12",
    border: "2px solid #7C2D12",
  },
});

  }
}, [winner]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-[#FFF7ED] text-lg font-semibold">{status}</div>
   <div className="bg-[#E6C3A1] p-4 rounded-2xl shadow-lg">
      <div className="grid grid-cols-3 gap-3">
        <Square value={squares[0]} onSquareclick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareclick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareclick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareclick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareclick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareclick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareclick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareclick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareclick={() => handleClick(8)} />
      </div>
    </div>
      <button
      onClick={() => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
      }}
      className="bg-[#F97316] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition"
    >
      New Game
    </button>
    </div>
  );
};

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}
