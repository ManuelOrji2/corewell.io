import { Link } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import visibilityImg from "../../images/solar_eye-broken.png";
import signUpImg from "../../images/sign-up.png";
import lineImg from "../../images/Line.png";

const SignUp = () => {
  return (
    <main>
      <div className="h-[150vh] w-full flex flex-col items-center justify-center gap-6">
        <header>
          <div>
            <img src={signUpImg} alt="" />
          </div>
          <h3 className="text-[45px]">Create an account!</h3>
        </header>
        <form className="flex items-center flex-col gap-6">
          <div className="flex flex-col gap-6">
            <label className="text-[14px] font-[600]">Full name*</label>
            <input
              placeholder="Full name"
              className="border border-solid border-[#858585] bg-transparent outline-none p-[15px] h-[62px] w-[447px] placeholder:text-[#5C5C5C]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-6">
            <label className="text-[14px] font-[600]">Email*</label>
            <input
              placeholder="Email"
              className="border border-solid border-[#858585] bg-transparent outline-none p-[15px] h-[62px] w-[447px] placeholder:text-[#5C5C5C]"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-6">
            <label className="text-[14px] font-[600]">Password*</label>
            <div className="flex items-center border  border-solid border-[#858585] p-[15px] h-[62px] w-[447px]">
              <input
                placeholder="Password"
                className="w-[95%] border-none bg-transparent outline-none placeholder:text-[#5C5C5C]"
                type="password"
              />

              <img className="cursor-pointer" src={visibilityImg} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <label className="text-[14px] font-[600]">Confirm Password*</label>
            <div className="flex items-center border  border-solid border-[#858585] p-[15px] h-[62px] w-[447px]">
              <input
                placeholder="Confirm Password"
                className="w-[95%] border-none bg-transparent outline-none placeholder:text-[#5C5C5C]"
                type="password"
              />

              <img className="cursor-pointer" src={visibilityImg} alt="" />
            </div>
          </div>
          <div className="w-full flex items-center gap-2 px-3">
            <input className="cursor-pointer" type="checkbox" />
            <span>
              I agree to the{" "}
              <a className="font-semibold underline" href="">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="font-semibold underline" href="">
                Privacy Policy.
              </a>
            </span>
          </div>
          <button
            className="bg-[#D6FF01] p-[10px] h-[62px] w-[447px] font-semibold"
            type="submit"
          >
            Create an account
          </button>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <img src={lineImg} alt="" />
              <span className="font-semibold"> Already have an account?</span>
              <img src={lineImg} alt="" />
            </div>
            <Link to="/sign-in">
              <button className="border border-solid border-black  p-[10px] h-[62px] w-[447px] font-semibold">
                Sign in
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default SignUp;
