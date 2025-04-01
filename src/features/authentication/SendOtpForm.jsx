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
    <div className="container xl:w-[30%] ">
      <div className="pt-9 space-y-10">
        <form
          action=""
          className="space-y-6 text-secondary-0"
          onSubmit={onSubmit}
        >
          <TextField
            label="PhoneNumber"
            name="phoneNumber"
            register={register}
          />
          {isSendig ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              verification code
            </button>
          )}
        </form>
        <h1 className="text-center font-bold">or</h1>
        <div className="flex justify-between flex-col">
          <div>
            <p>
             <span className="text-red-600 font-black">* </span> You can test the application without registering your phone
              number. Just click on one of the roles below
            </p>
          </div>
          <div className="flex justify-between mt-5">
            {testerRolles.map((item) => (
              <TesterRolles
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                label={item.role}
                phoneNumber={item.phoneNumber}
                mutateAsync={mutateAsync}
                setStep={setStep}
                setOtp={setOtp}
                setTesterPhoneNumber={setTesterPhoneNumber}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendOtpForm;
