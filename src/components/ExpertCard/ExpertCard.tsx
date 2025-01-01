import { FC } from "react";
import { expertDetail } from "../Experts/Experts";

import detailsIcon from "../../images/active detail icon.png";

import styles from "./ExpertCard.module.scss";
import { Link } from "react-router-dom";

type CardProps = {
  data: expertDetail;
};

const Card: FC<CardProps> = ({ data }) => {
  return (
    <Link to="/expert-info" className={styles.expert}>
      <div className="overflow-hidden">
        <img
          className={styles.expImg}
          width={440}
          height={290}
          alt=""
          src={data.img}
        />
      </div>
      <span className={styles.imgTag}>{data.imgTag}</span>
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[20px]">
            {data.name},{" "}
            <span className="text-[16px] text-[#5C5C5C]">{data.niche}</span>
          </h3>
          <div>
            <img
              title="View Profile"
              className={`${styles.detailIcon} cursor-pointer`}
              src={detailsIcon}
              alt=""
            />
          </div>
        </div>
        <p className="text-[16px] text-[#5C5C5C]">{data.experience}</p>
        <div>
          <img src={data.rating} alt="" />
        </div>
        <div>
          <button className={styles.bookAptmentBtn}>{data.bookAptment}</button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
