import rightArrowImg from "../../images/guidance_left-arrow.png";
import leftArrowImg from "../../images/Vector.png";

const PaginationTab = () => {
  return (
    <div className="flex items-center justify-center gap-6 ">
      <div>
        <img src={leftArrowImg} alt="" />
      </div>
      <div className="flex items-center gap-6">
        <button className="w-[32px] h-[32px] bg-[#D6FF01] font-semibold">
          1
        </button>
        <button className="w-[32px] h-[32px] bg-white font-semibold">2</button>
        <button className="w-[32px] h-[32px] bg-white font-semibold">3</button>
      </div>
      <div>
        <img src={rightArrowImg} alt="" />
      </div>
    </div>
  );
};

export default PaginationTab;
