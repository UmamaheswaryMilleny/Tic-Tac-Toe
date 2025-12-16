const Square = ({ value, onSquareclick }) => {
  return <button className=" w-20 h-20
        bg-[#9A4A0A]
        border-4 border-[#7C2D12]
        rounded-xl
        text-[#FFF7ED] text-3xl font-bold
        flex items-center justify-center
        hover:scale-105 transition
 " onClick={onSquareclick} >{value}</button>;
};

export default Square;
