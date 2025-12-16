import Board  from "./components/Board";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return <div className="min-h-screen bg-[#B32222] flex items-center justify-center ">
      <Toaster position="top-center" />
    <Board />
    {/* <Home/> */}
  </div>;
}

export default App;


