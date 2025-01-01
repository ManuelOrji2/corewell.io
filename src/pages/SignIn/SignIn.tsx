import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import signInImg from "../../images/sign in.png";
import visibilityImg from "../../images/solar_eye-broken.png";
import lineImg from "../../images/Line.png";

const SignIn = () => {
  return (
    <main>
      <div className="h-[110vh] w-full flex flex-col items-center justify-center gap-6">
        <header>
          <div>
            <img src={signInImg} alt="" />
          </div>
          <h3 className="text-[45px]">Welcome back!</h3>
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
          <button
            className="bg-[#D6FF01] p-[10px] h-[62px] w-[447px] font-semibold"
            type="submit"
          >
            Sign in
          </button>
          <Link to="/forgot-password" className="font-semibold">
            Forgot your password?
          </Link>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={lineImg} alt="" />
              <span className="font-semibold">Don't have an account?</span>
              <img src={lineImg} alt="" />
            </div>
            <Link to="/sign-up">
              <button className="border border-solid border-black  p-[10px] h-[62px] w-[447px] font-semibold">
                Sign up
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default SignIn;
