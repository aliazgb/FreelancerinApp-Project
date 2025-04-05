import React from "react";
import Loader from "../ui/Loader";
import TextField from "../ui/TextField";
import TesterRolles from "./TesterRolles";

const testerRolles = [
  {
    role: "Admin",
    phoneNumber: "015211111111",
  },
  {
    role: "Freelancer",
    phoneNumber: "015333333333",
  },
  {
    role: "Owner",
    phoneNumber: "015222222222",
  },
];

function SendOtpForm({
  onSubmit,
  isSendig,
  register,
  handleSubmit,
  setOtp,
  mutateAsync,
  setStep,
  setTesterPhoneNumber,
}) {
  return (
    <div className="container w-[80%] flex justify-center mt-6 xl:w-[30%] md:w-[30%] shadow-[2px_8px_16px_3px_rgba(0,0,0,0.5)] rounded">
      <div className="pt-9 space-y-10  py-8 mt-8">
        <h1 className="bold text-center font-extrabold font-playfair">Freelancing Dashboard App</h1>
        <form
          action=""
          className="space-y-6 text-secondary-0"
          onSubmit={onSubmit}
        >
          <TextField
            label="Phone Number"
            name="phoneNumber"
            register={register}
          />
          {isSendig ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              Get Verification  Code
            </button>
          )}
        </form>
        <h1 className="text-center font-extrabold">or</h1>
        <div className="flex justify-between flex-col">
          <div>
            <p>
              <span className="text-red-600 font-black">* </span> You can test
              the application without registering your phone number. Just click
              on one of the roles below
            </p>
          </div>
          <div className="flex justify-between mt-5">
            {testerRolles.map((item,index) => (
              <TesterRolles
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                label={item.role}
                phoneNumber={item.phoneNumber}
                mutateAsync={mutateAsync}
                setStep={setStep}
                setOtp={setOtp}
                setTesterPhoneNumber={setTesterPhoneNumber}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendOtpForm;
