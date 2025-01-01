import { FC, SetStateAction, Dispatch } from "react";

import rightArrowImg from "../../images/guidance_left-arrow.png";
import leftArrowImg from "../../images/Vector.png";

interface paginationNumType {
  interger: number;
  id: number;
}

const paginationNum: paginationNumType[] = [
  { interger: 1, id: 0 },
  { interger: 2, id: 4 },
  { interger: 3, id: 5 },
];

interface prop {
  tabIndex: number;
  setTabIndex: Dispatch<SetStateAction<number>>;
}

const PaginationTab: FC<prop> = ({ tabIndex, setTabIndex }) => {
  return (
    <div className="flex items-center justify-center gap-6 ">
      <div className="cursor-pointer">
        <img src={leftArrowImg} alt="" />
      </div>
      <div className="flex items-center gap-6">
        {paginationNum.map((num) => (
          <button
            onClick={() => setTabIndex(num.id)}
            className={
              tabIndex === num.id
                ? "w-[32px] h-[32px] bg-[#D6FF01] font-semibold"
                : "w-[32px] h-[32px] bg-white font-semibold"
            }
          >
            {num.interger}
          </button>
        ))}
      </div>
      <div className="cursor-pointer">
        <img src={rightArrowImg} alt="" />
      </div>
    </div>
  );
};

export default PaginationTab;
