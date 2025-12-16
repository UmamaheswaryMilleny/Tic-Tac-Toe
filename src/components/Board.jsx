import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Square from "./Square";
import toast from "react-hot-toast";

const Board = () => {
  const navigate = useNavigate()
//Whose turn was it last time?If it exists → use it f not → X starts (true)
  const [xIsNext, setXIsNext] = useState(()=>{
    const savedTurn = localStorage.getItem("xIsNext")
    return savedTurn?JSON.parse(savedTurn):true
  });
  // Why () => {} inside useState is becasue Run this code ONLY ONCE, when the app starts.
  const [squares, setSquares] = useState(()=>{
    const savedSquares=localStorage.getItem("squares")
    return savedSquares? JSON.parse(savedSquares):Array(9).fill(null)
  });

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
  localStorage.setItem("squares", JSON.stringify(squares));
  localStorage.setItem("xIsNext", JSON.stringify(xIsNext));
}, [squares, xIsNext]);


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

const resetGame=()=>{
  setSquares(Array(9).fill(null))
  setXIsNext(true)
  localStorage.removeItem("squares")
  localStorage.removeItem("xIsNext")
}

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-[#FFF7ED] text-lg font-extrabold">{status}</div>
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
<div className="flex gap-2">
   <button
      onClick={resetGame}
      className="bg-[#F97316] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition"
    >
      New Game
    </button>
    <button onClick={()=>navigate('/')} className="bg-[#F97316] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
      Back to Home
    </button>
</div>
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
