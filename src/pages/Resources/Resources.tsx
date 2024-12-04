import Footer from "../../components/Footer/Footer";
import progCrseImg from "../../images/Group 18.png";
import ResourcesTab from "../../components/ResourcesTab/ResourcesTab";

import styles from "./Resources.module.scss";

import { resHubData as resources } from "../../components/ResourceHub/ResourceHub";
import PaginationTab from "../../components/PaginationTab/PaginationTab";

const Resources = () => {
  return (
    <main className="flex flex-col items-center container m-auto px-[75px]  ">
      <header className="w-full mt-40">
        <div className="flex flex-col gap-3">
          <div>
            <img src={progCrseImg} alt="" />
          </div>
          <h1 className="text-4xl">Resource Hub</h1>
        </div>
      </header>
      <ResourcesTab />
      <section className="py-[40px]">
        <div className={styles.resCourses}>
          {resources.map((data, i) => (
            <div className={styles.resCourse} key={i}>
              <img width={440} height={290} alt="" src={data.img} />
              <span>{data.imgTag}</span>
              <div className={styles.resCourseText}>
                <img src={data.description} alt="" />
              </div>
            </div>
          ))}
        </div>
        <PaginationTab />
      </section>

      <Footer />
    </main>
  );
};

export default Resources;
