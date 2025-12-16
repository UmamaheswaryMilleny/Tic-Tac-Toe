import { Routes,Route } from "react-router-dom";
import Board  from "./components/Board";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return <div className="min-h-screen bg-[#B32222] flex items-center justify-center ">
      <Toaster position="top-center" />
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/game" element={<Board/>}/>
</Routes>
  
  </div>;
}

export default App;


