import { FC } from "react";
import { CardDetails } from "../../pages/Pricing/Pricing";

import bullet from "../../images/grommet-icons_status-good.png";

type CardProps = {
  data: CardDetails;
};

const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className="relative flex flex-col items-center gap-12 w-[468px] h-[588px] bg-white p-10">
      <div>
        <div>
          <img src={data.header} alt="" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[26px]">{data.planType}</h3>
          <span className="text-[40px]">
            {data.price}
            <span className="text-[16px]">/Month</span>
          </span>
        </div>
        <p>{data.description}</p>
      </div>
      <div className="flex flex-col gap-36">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div>
              <img src={bullet} alt="" />
            </div>
            <span>{data.benefits.first}</span>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <img src={bullet} alt="" />
            </div>
            <span>{data.benefits.second}</span>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <img src={bullet} alt="" />
            </div>
            <span>{data.benefits.third}</span>
          </div>
        </div>
        <button className="w-[404px] h-[61px] bg-[#D6FF01] text-[16px] text-center p-3">
          Choose {data.planType.split(" ").at(0)}
        </button>
      </div>
      <div className="absolute top-0 right-0">
        <img src={data.popularTag} alt="" />
      </div>
    </div>
  );
};

export default Card;
