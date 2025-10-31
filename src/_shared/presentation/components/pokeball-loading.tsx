
const Pokeball = () => {
  return (
    <div className="relative">
      <div className="w-5 h-5">
        <div className="relative w-full h-full rounded-full overflow-hidden border border-black">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#DC0A2D]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black transform -translate-y-1/2"></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-black flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-white rounded-full border border-[#D3D3D3]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokeball;
