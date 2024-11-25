import styles from "./ResourceHub.module.scss";
import resHubImg1 from "../../images/Rectangle 6.png";
import resHubImg2 from "../../images/Rectangle 7.png";
import resHubImg3 from "../../images/Rectangle 8.png";

import expMoreImg from "../../images/Group 20.png";
import progCrseImg from "../../images/Group 18.png";

import mindfulExpImg from "../../images/Group 25.png";
import fitPlanImg from "../../images/Group 22.png";
import dietaryImg from "../../images/Group 22 (1).png";

type resHubDatum = {
  img: string;
  imgTag: string;
  description: string;
};

const resHubData: resHubDatum[] = [
  {
    img: resHubImg1,
    imgTag: "Course",
    description: mindfulExpImg,
  },
  {
    img: resHubImg2,
    imgTag: "Course",
    description: fitPlanImg,
  },
  {
    img: resHubImg3,
    imgTag: "Program",
    description: dietaryImg,
  },
];

const ResourceHub = () => {
  return (
    <section className={styles.resHubSec}>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-3">
          <div>
            <img src={progCrseImg} alt="" />
          </div>
          <h1 className="text-4xl">Resource Hub</h1>
        </div>
        <img src={expMoreImg} alt="" />
      </div>
      <div className={`${styles.resHubCourses} pt-10`}>
        {resHubData.map((datum, i) => (
          <div className={styles.resHubCourse} key={i}>
            <img width={440} height={290} alt="" src={datum.img} />
            <span>{datum.imgTag}</span>
            <div className={styles.resHubCourseText}>
              <img src={datum.description} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ResourceHub;
