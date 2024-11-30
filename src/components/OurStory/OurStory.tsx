import styles from "./OurStory.module.scss";
import ourStoryImg from "../../images/ourstory.png";
import watchOurStoryImg from "../../images/storybg.png";

const OurStory = () => {
  return (
    <section className={styles.ourstorySec}>
      <div className="flex justify-between h-[80vh] ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <img src={ourStoryImg} alt="" />
            </div>
            <h3 className="text-[36px] text-white">
              A better way to wellness awaits you!
            </h3>
          </div>
          <p className="text-[16px] text-white w-[427px]">
            “At CoreWell, we believe wellness is more than a goal—it’s a
            journey. Discover how we connect you with expert care, trusted
            resources, and a supportive community to help you thrive every day.”
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div></div>
          <p className="text-[16px] text-white w-[427px]">
            “Our platform connects you to trusted specialists, valuable
            resources, and a vibrant community, all designed to help you thrive,
            achieve your health goals, and embrace a balanced life with
            confidence.”
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center text-white">
        <button className="flex gap-2 items-center text-[16px]">
          <span>Watch our story</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33333 4L12 8L5.33333 12V4Z"
              fill="white"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default OurStory;
