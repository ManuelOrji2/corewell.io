import realStoriesImg from "../../images/realstories.png";
import styles from "./Testimonies.module.scss";

interface storyCard {
  name: string;
  story: string;
  review: string;
}

const testimony: storyCard[] = [
  {
    name: "Sarah L., CoreWell Member",
    story:
      "CoreWell has completely transformed how I manage my health. The personalized care and easy access to trusted specialists make me feel empowered and in control of my well-being. I’ve never felt more supported on my wellness journey!",
    review: "5 Star review",
  },
  {
    name: "Michael P., CoreWell Member",
    story:
      "I was nervous about finding the right specialist for my concerns, but CoreWell made it so simple. Within minutes, I booked an appointment with a top-notch cardiologist who provided incredible guidance. It’s like having a healthcare partner right at my fingertips!",
    review: "4 Star review",
  },
  {
    name: "Emily T., CoreWell Member",
    story:
      "The library of resources on CoreWell is amazing. From nutrition guides to mental health tips, I’ve learned so much that I’ve applied to my daily life. It’s like having a wellness coach 24/7!",
    review: "5 Star review",
  },
  {
    name: "John K., CoreWell Member",
    story:
      "CoreWell has completely transformed how I manage my health. The personalized care and easy access to trusted specialists make me feel empowered and in control of my well-being. I’ve never felt more supported on my wellness journey!",
    review: "4 Star review",
  },
  {
    name: "Lila R., CoreWell Member",
    story:
      "I was nervous about finding the right specialist for my concerns, but CoreWell made it so simple. Within minutes, I booked an appointment with a top-notch cardiologist who provided incredible guidance. It’s like having a healthcare partner right at my fingertips!",
    review: "5 Star review",
  },
];

const Testimonies = () => {
  return (
    <section className={styles.testiSec}>
      <div className="flex flex-col gap-3">
        <div>
          <img src={realStoriesImg} alt="" />
        </div>
        <h1 className="text-4xl">Hear from our users</h1>
      </div>
      <div className="overflow-hidden w-full">
        <div className={`grid grid-cols-6 gap-8 ${styles.testimonies}`}>
          {testimony.map((tes) => (
            <div
              className={`flex flex-col gap-4 pt-10 ${styles.testimony}`}
              key={tes.name}
            >
              <p className="text-[20px] h-48">{tes.story}</p>
              <div>
                <h3 className="font-bold text-[16px]">{tes.name}</h3>
                <span className="text-[#5C5C5C] text-[14px]">{tes.review}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
