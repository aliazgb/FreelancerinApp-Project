import React from "react";
import { sendOtpHandler } from "./sendOtpHandler";

function TesterRolles({
  handleSubmit,
  label,
  mutateAsync,
  setStep,
  setOtp,
  phoneNumber,
  setTesterPhoneNumber
}) {
    
  return (
    <div className="mt-5 ">
      
      <button
        className="btn--primary rounded p-2"
        onClick={handleSubmit(() =>
          sendOtpHandler(
            {  phoneNumber  },
            mutateAsync,
            setOtp,
            setStep,
            setTesterPhoneNumber
          )
        )}
      >
        {label}
      </button>
    </div>
  );
}

export default TesterRolles;
