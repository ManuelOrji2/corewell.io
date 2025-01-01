import styles from "./Experts.module.scss";
import ExpertCard from "../ExpertCard/ExpertCard";
import fiveStars from "../../images/Five stars.png";
import fourStars from "../../images/four  stars.png";
import fourPointFiveStars from "../../images/4.5 stars.png";

import DrUmar from "../../images/Dr. Umar.png";
import DrEmily from "../../images/Dr. Emily.png";
import DrHassan from "../../images/Dr. Hassan.png";

import meetExpImg from "../../images/experts.png";
import viewAllImg from "../../images/view all.png";

export interface expertDetail {
  img: string;
  imgTag: string;
  name: string;
  niche: string;
  experience: string;
  rating: string;
  bookAptment: string;
  group: number;
}

export const expertData: expertDetail[] = [
  {
    img: DrUmar,
    imgTag: "Cardiologist",
    name: "Dr. Umar Azar",
    // niche: "M.D., Harvard University",
    niche: "Cardiologist (M.D)",
    experience: "10+ years of experience in cardiology",
    rating: fiveStars,
    bookAptment: "Book appointment with Dr. Umar",
    group: 1,
  },
  {
    img: DrEmily,
    imgTag: "Gynaecologist",
    name: "Dr. Emily Brown",
    // niche: "M.D., Johns Hopkins University",
    niche: "Gynaecologist (M.D)",
    experience: "10+ years of experience in Gynaecology",
    rating: fourStars,
    bookAptment: "Book appointment with Dr. Emily",
    group: 1,
  },
  {
    img: DrHassan,
    imgTag: "Andrologist",
    name: "Dr. Umar Azar",
    // niche: "M.D., Stanford University",
    niche: "Andrologist (M.D)",
    experience: "10+ years of experience in Andrology",
    rating: fourPointFiveStars,
    bookAptment: "Book appointment with Dr. Hassan",
    group: 1,
  },
  {
    img: DrUmar,
    imgTag: "Cardiologist",
    name: "Dr. Umar Azar",
    // niche: "M.D., Harvard University",
    niche: "Cardiologist (M.D)",
    experience: "10+ years of experience in cardiology",
    rating: fiveStars,
    bookAptment: "Book appointment with Dr. Umar",
    group: 2,
  },
  {
    img: DrEmily,
    imgTag: "Gynaecologist",
    name: "Dr. Emily Brown",
    // niche: "M.D., Johns Hopkins University",
    niche: "Gynaecologist (M.D)",
    experience: "10+ years of experience in Gynaecology",
    rating: fourStars,
    bookAptment: "Book appointment with Dr. Emily",
    group: 2,
  },
  {
    img: DrHassan,
    imgTag: "Andrologist",
    name: "Dr. Umar Azar",
    // niche: "M.D., Stanford University",
    niche: "Andrologist (M.D)",
    experience: "10+ years of experience in Andrology",
    rating: fourPointFiveStars,
    bookAptment: "Book appointment with Dr. Hassan",
    group: 2,
  },
  {
    img: DrUmar,
    imgTag: "Cardiologist",
    name: "Dr. Umar Azar",
    // niche: "M.D., Harvard University",
    niche: "Cardiologist (M.D)",
    experience: "10+ years of experience in cardiology",
    rating: fiveStars,
    bookAptment: "Book appointment with Dr. Umar",
    group: 3,
  },
  {
    img: DrEmily,
    imgTag: "Gynaecologist",
    name: "Dr. Emily Brown",
    // niche: "M.D., Johns Hopkins University",
    niche: "Gynaecologist (M.D)",
    experience: "10+ years of experience in Gynaecology",
    rating: fourStars,
    bookAptment: "Book appointment with Dr. Emily",
    group: 3,
  },
  {
    img: DrHassan,
    imgTag: "Andrologist",
    name: "Dr. Umar Azar",
    // niche: "M.D., Stanford University",
    niche: "Andrologist (M.D)",
    experience: "10+ years of experience in Andrology",
    rating: fourPointFiveStars,
    bookAptment: "Book appointment with Dr. Hassan",
    group: 3,
  },
];

const expGroupOne = expertData.filter((data) => data.group === 1);

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
        {expGroupOne.map((data) => (
          <ExpertCard data={data} />
        ))}
      </div>
    </section>
  );
};

export default Experts;
