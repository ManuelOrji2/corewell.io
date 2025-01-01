import specalistsIcon from "../../images/specialistsIcon.png";
import appointmentsIsocon from "../../images/Appointment Isocons.png";

import ExpertCard from "../../components/ExpertCard/ExpertCard";
import { expertData } from "../../components/Experts/Experts";
import Footer from "../../components/Footer/Footer";

import styles from "./Appointment.module.scss";

const Appointment = () => {
  return (
    <main className="flex flex-col items-center container m-auto px-[64px]">
      <section className="w-full mt-36 pb-12 flex items-center gap-28">
        <div>
          <header className="flex flex-col">
            <div>
              <img src={specalistsIcon} alt="" />
            </div>
            <h1 className="text-[48px]">
              Find the right specialist for your needs
            </h1>
          </header>
          <p className="w-[624px] text-[18px] font-[400] text-[#5C5C5C]">
            Access trusted professionals across various fields of healthcare,
            ready to assist you on your wellness journey.
          </p>
        </div>
        <div>
          <img src={appointmentsIsocon} alt="" />
        </div>
      </section>
      <section>
        <div className={`${styles.experts} pt-10`}>
          {expertData.map((data) => (
            <ExpertCard data={data} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Appointment;
