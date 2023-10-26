import React from "react";
import TopNavigation from "../../../components/TopNavigation";
import Paragraf1Medium from "../../../components/paragrafs/Paragraf1Medium";
import SubHeading2Medium from "../../../components/subheadings/SubHeading2Medium";
import SubHeading2Bold from "../../../components/subheadings/SubHeading1Bold";
import Paragraf2Bold from "../../../components/paragrafs/Paragraf2Bold";
import Paragraf2Medium from "../../../components/paragrafs/Paragraf2Medium";
import ButtonMedium from "../../../components/buttons/ButtonMedium";
import InputText from "../../../components/inputs/InputText";
import InputNumber from "../../../components/inputs/InputNumber";
import InputPassword from "../../../components/inputs/InputPassword";

const Login = () => {
  return (
    <div className="relative bg-neutral-100 mt-[70px]">
      {/* Navigation */}
      <TopNavigation />

      <div className="bg-surface-200 px-8 pt-28 pb-20">
        <SubHeading2Medium className={"text-neutral-900"}>
          Welcome Back
        </SubHeading2Medium>

        <form action="" className="relative z-10">
          <InputText className={"mt-8"} placeholder="Username" />
          <InputNumber className={"mt-8"} placeholder="Phone Number" />
          <InputPassword className={"mt-8"} placeholder="Password" />
          <ButtonMedium className={"w-full mt-12"}>
            <SubHeading2Bold className={"text-xl"}>
              Sign In
            </SubHeading2Bold>
          </ButtonMedium>
        </form>

        <div className="flex justify-center gap-x-1 mt-14">
          <Paragraf2Medium className=" text-neutral-300">
            Don’t have an Account?
          </Paragraf2Medium>
          <Paragraf2Bold className=" text-primary-500">Register</Paragraf2Bold>
        </div>
      </div>

      <div className="bg-surface-200 min-h-screen">
        <Paragraf1Medium
          className={"pt-20 mt-2 mb-14 text-neutral-500 text-center"}
        >
          atau masuk dengan
        </Paragraf1Medium>
        <div className="flex gap-x-6 justify-center">
          <div className="bg-surface-100 py-5 px-8 shadow-sm rounded-[20px] cursor-pointer">
            <img src="./assets/images/apple.png" alt="" />
          </div>
          <div className="bg-surface-100 py-5 px-8 shadow-sm rounded-[20px] cursor-pointer">
            <img src="./assets/images/google.png" alt="" />
          </div>
          <div className="bg-surface-100 py-5 px-8 shadow-sm rounded-[20px] cursor-pointer">
            <img src="./assets/images/facebook.png" alt="" />
          </div>
        </div>
      </div>

      {/* Decoration */}
      <img
        className="absolute top-12 z-0 right-0 w-32 "
        src="./assets/images/buble-register.png"
        alt=""
      />

      <div className="flex justify-between bg-surface-900 py-5 px-7 absolute top-0 left-0 right-0 z-10">
        <SubHeading2Bold className={"text-xl"}>Sign In</SubHeading2Bold>
        <img src="./assets/icons/close.svg" className="cursor-pointer" alt="" />
      </div>
    </div>
  );
};

export default Login;
