import { FC } from "react";
import { CardDetails } from "../Features/Features";
// import styles from "./Card.module.scss";
// import horiLine from "../../images/Line 6.png";
// import vertLine from "../../images/Line 3.png";

type CardProps = {
  data: CardDetails;
};

const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className="w-[509px] h-[378px] flex flex-col gap-8 p-16 py-10">
      <img src={data.img} alt="" width={60} height={70} />
      <div className="flex flex-col gap-4">
        {" "}
        <h3 className="font-bold">{data.header}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
