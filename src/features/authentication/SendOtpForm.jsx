import React from "react";
import Loader from "../ui/Loader";
import TextField from "../ui/TextField";
import TesterRolles from "./TesterRolles";

const testerRolles = [
  { role: "Admin", phoneNumber: "015211111111" },
  { role: "Owner", phoneNumber: "015222222222" },
  { role: "Freelancer", phoneNumber: "015333333333" },
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-secondary-50 via-primary-100 to-primary-900 p-4">
    <div className="w-full max-w-md bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 rounded-3xl shadow-2xl p-8 space-y-8 transform transition-transform hover:-translate-y-2 hover:scale-105 duration-300">
      
      <h1 className="text-center text-3xl font-extrabold font-playfair text-secondary-900 drop-shadow-sm">
        Freelancer Dashboard App
      </h1>
  
      <form
        action=""
        className="space-y-6 text-secondary-700"
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
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Verification Code
          </button>
        )}
      </form>
  
      <div className="flex items-center gap-4">
        <div className="flex-grow h-[1px] bg-primary-200/50"></div>
        <span className="text-secondary-700 font-semibold">or</span>
        <div className="flex-grow h-[1px] bg-primary-200/50"></div>
      </div>
  
      <div className="space-y-4">
        <p className="text-sm text-secondary-600 leading-relaxed">
          <span className="text-red-500 font-bold">* </span> You can test
          the application without registering your phone number. Just click
          on one of the roles below:
        </p>
  
        <div className="flex justify-between gap-3">
          {testerRolles.map((item, index) => (
            <TesterRolles
              key={index}
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
