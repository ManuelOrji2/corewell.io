import Footer from "../../components/Footer/Footer";
import progCrseImg from "../../images/prog&courses.png";
import allResourceIsocon from "../../images/resources isoicon.png";
import resCoursesIsocon from "../../images/res courses isocon.png";
import resProgramIsocon from "../../images/res program isocon.png";

import ResourcesTab from "../../components/ResourcesTab/ResourcesTab";

import styles from "./Resources.module.scss";

import { resHubData as resources } from "../../components/ResourceHub/ResourceHub";
import PaginationTab from "../../components/PaginationTab/PaginationTab";
import { useState } from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const resCourseData = resources.filter((data) => data.imgTag === "Course");
  const resProgData = resources.filter((data) => data.imgTag === "Program");

  return (
    <main className="flex flex-col items-center container m-auto px-[64px]">
      <section className="w-full mt-32 pb-12 flex items-center gap-32">
        <header>
          <div className="flex flex-col gap-3">
            <div>
              <img src={progCrseImg} alt="" />
            </div>
            <h1 className="text-4xl">Resource Hub</h1>
          </div>
        </header>
        <div className="h-40">
          {tabIndex === 0 ? (
            <img src={allResourceIsocon} alt="" />
          ) : tabIndex === 1 ? (
            <img src={resCoursesIsocon} alt="" />
          ) : (
            <img src={resProgramIsocon} alt="" />
          )}
        </div>
      </section>
      <ResourcesTab tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <section className="my-[40px]">
        <div className="h-[120vh]">
          <div className={styles.resCourses}>
            {tabIndex === 0 &&
              resources.map((data, i) => (
                <Link to="/sign-in" className={styles.resCourse} key={i}>
                  <img width={440} height={290} alt="" src={data.img} />
                  <span>{data.imgTag}</span>
                  <div className={styles.resCourseText}>
                    <img src={data.description} alt="" />
                  </div>
                </Link>
              ))}

            {tabIndex === 1 &&
              resCourseData.map((data, i) => (
                <Link to="/sign-in" className={styles.resCourse} key={i}>
                  <img width={440} height={290} alt="" src={data.img} />
                  <span>{data.imgTag}</span>
                  <div className={styles.resCourseText}>
                    <img src={data.description} alt="" />
                  </div>
                </Link>
              ))}

            {tabIndex === 2 &&
              resProgData.map((data, i) => (
                <Link to="/sign-in" className={styles.resCourse} key={i}>
                  <img width={440} height={290} alt="" src={data.img} />
                  <span>{data.imgTag}</span>
                  <div className={styles.resCourseText}>
                    <img src={data.description} alt="" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <PaginationTab tabIndex={tabIndex} setTabIndex={setTabIndex} />
      </section>
      <Footer />
    </main>
  );
};

export default Resources;
