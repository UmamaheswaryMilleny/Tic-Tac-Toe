import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#E6C3A1] p-10 rounded-3xl shadow-xl text-center max-w-sm">
      <h1 className="text-3xl font-bold text-[#7C2D12] mb-4">
        Welcome to Tic-Tac-Toe 🎮
      </h1>

      <p className="text-[#7C2D12] mb-6">
        Challenge your friend and see who wins!
      </p>

      <button
        onClick={() => navigate("/game")}
        className="
          bg-[#F97316]
          text-white
          px-8 py-3
          rounded-full
          font-semibold
          shadow-md
          hover:scale-105
          transition
        "
      >
        Start Game
      </button>
    </div>
  );
};

export default Home;
