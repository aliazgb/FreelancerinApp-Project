import React from "react";
import Loader from "../ui/Loader";
import TextField from "../ui/TextField";
import TesterRolles from "./TesterRolles";

const testerRolles = [
  {
    role: "Admin",
    phoneNumber: "09351160839",
  },
  {
    role: "Freelancer",
    phoneNumber: "09147098747",
  },
  {
    role: "Owner",
    phoneNumber: "09144571959",
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
    <div className="container xl:w-[30%]">
      <div className="pt-9">
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
        <form action="">
          {testerRolles.map((item) => (
            <TesterRolles
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              label={item.role}
              phoneNumber={item.phoneNumber}
              mutateAsync={mutateAsync}
              setStep={setStep}
              setOtp={setOtp}
            />
          ))}
        </form>
      </div>
    </div>
  );
}

export default SendOtpForm;
