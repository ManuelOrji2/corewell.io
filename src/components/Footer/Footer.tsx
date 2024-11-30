import styles from "./Footer.module.scss";
import newsletterImg from "../../images/newsletterimg.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.fter}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <img src={newsletterImg} alt="" />
            </div>
            <p className="w-[500px] text-[35px] leading-[40px]">
              Get the latest health tips and updates straight to your inbox.
            </p>
          </div>
          <form className="flex items-center gap-6">
            <input
              className="bg-transparent w-[233px] h-[40px] px-[20px] py-[10px] placeholder:text-[12px] placeholder:text-white border-[0.5px] border-solid border-[#808080]"
              type="email"
              placeholder="Enter Email Address"
            />
            <button className="bg-[#D6FF01] px-[20px] py-[10px] text-black border-none">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] text-[#C6C6C6]">Explore</h3>
          <div className="flex flex-col gap-2">
            <div>Home</div>
            <div>Services</div>
            <div>Specialists</div>
            <div>Testimonials</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] text-[#C6C6C6]">Learn more</h3>
          <div className="flex flex-col gap-2">
            <div>Blog</div>
            <div>Careers</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] text-[#C6C6C6]">Support</h3>
          <div className="flex flex-col gap-2">
            <div>FAQs</div>
            <div>Help center</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] text-[#C6C6C6]">Legal & policies Links</h3>
          <div className="flex flex-col gap-2">
            <div>Privacy Policy</div>
            <div>Terms of service</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] text-[#C6C6C6]">Follow us</h3>
          <div className="flex flex-col gap-2">
            <div>Facebook</div>
            <div>LinkedIn</div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
