import styles from "./ResourceHub.module.scss"
import resHubImg1 from "../../images/Rectangle 6.png"
import resHubImg2 from "../../images/Rectangle 7.png"
import resHubImg3 from "../../images/Rectangle 8.png"

import expMoreIcon from "../../images/Group 20.png"
import progCrseIcon from "../../images/Group 18.png"

const resHubData = [resHubImg1,resHubImg2,resHubImg3]

const ResourceHub = () => {
  return (
    <section className={styles.resHubSec}>
        <div  className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-3">
                 <div><img src={progCrseIcon} alt=""/></div>
                 <h1 className="text-4xl">Resource Hub</h1>
            </div>
            <img src={expMoreIcon} alt=""/>
        </div>
        <div className={`${styles.resHubCourses} pt-10`}>
            {
                resHubData.map((datum,i)=>
                (<div className={styles.resHubCourse} key={i} >
                    <img width={450} height={290} alt="" src={datum}/>
                    <button>Course</button>
                </div>))
            }
        </div>
    </section>
  )
}
export default ResourceHub