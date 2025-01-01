import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import weGotUImg from "../../images/we got you.png";

const ForgotPass = () => {
  return (
    <main>
      <div className="h-[110vh] w-full flex flex-col items-center justify-center gap-6">
        <header>
          <div>
            <img src={weGotUImg} alt="" />
          </div>
          <h3 className="text-[45px]">Forgot Password?</h3>
        </header>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <label className="text-[14px] font-[600]">Email*</label>
            <input
              placeholder="Email"
              className="border border-solid border-[#858585] bg-transparent outline-none p-[15px] h-[62px] w-[447px] placeholder:text-[#5C5C5C]"
              type="email"
            />
          </div>
          <button
            className="bg-[#D6FF01] p-[10px] h-[62px] w-[447px] font-semibold"
            type="submit"
          >
            Send reset link
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default ForgotPass;
