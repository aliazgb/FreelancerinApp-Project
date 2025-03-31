import React from "react";
import { sendOtpHandler } from "./sendOtpHandler";

function TesterRolles({
  handleSubmit,
  label,
  mutateAsync,
  setStep,
  setOtp,
  phoneNumber,
}) {
    
  return (
    <div className="mt-5">
      <button
        className="btn btn--primary"
        onClick={handleSubmit(() =>
          sendOtpHandler(
            {  phoneNumber  },
            mutateAsync,
            setOtp,
            setStep
          )
        )}
      >
        {label}
      </button>
    </div>
  );
}

export default TesterRolles;
