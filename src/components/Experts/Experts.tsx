import styles from "./Experts.module.scss";

import DrUmar from "../../images/Dr. Umar.png";
import DrEmily from "../../images/Dr. Emily.png";
import DrHassan from "../../images/Dr. Hassan.png";

import meetExpImg from "../../images/meetExp.png";
import viewAllImg from "../../images/view all.png";

type expertDetail = {
  img: string;
  imgTag: string;
  name: string;
  attendedInst: string;
  bookAptment: string;
};

const expertData: expertDetail[] = [
  {
    img: DrUmar,
    imgTag: "Cardiologist",
    name: "Dr. Umar Azar",
    attendedInst: "M.D., Harvard University",
    bookAptment: "Book appointment with Dr. Umar",
  },
  {
    img: DrEmily,
    imgTag: "Gynaecologist",
    name: "Dr. Emily Brown",
    attendedInst: "M.D., Johns Hopkins University",
    bookAptment: "Book appointment with Dr. Emily",
  },
  {
    img: DrHassan,
    imgTag: "Andrologist",
    name: "Dr. Umar Azar",
    attendedInst: "M.D., Stanford University",
    bookAptment: "Book appointment with Dr. Hassan",
  },
];

const Experts = () => {
  return (
    <section className={styles.expSec}>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-3">
          <div>
            <img src={meetExpImg} alt="" />
          </div>
          <h1 className="text-4xl">Your wellness experts</h1>
        </div>
        <img src={viewAllImg} alt="" />
      </div>
      <div className={`${styles.experts} pt-10`}>
        {expertData.map((datum, i) => (
          <div className={styles.expert} key={i}>
            <div className="overflow-hidden">
              <img width={440} height={290} alt="" src={datum.img} />
            </div>
            <span className={styles.imgTag}>{datum.imgTag}</span>
            <div className="flex flex-col gap-4">
              <div className="pt-2">
                <h3 className="font-bold text-[24px]">{datum.name}</h3>
                <p className="text-[14px] text-[#5C5C5C]">
                  {datum.attendedInst}
                </p>
              </div>
              <div>
                <button className={styles.bookAptmentBtn}>
                  {datum.bookAptment}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
