import React, { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOtpForm from "./SendOtpForm";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  switch (step) {
    case 1: {
      return (
        <SendOtpForm
          setStep={setStep}
          onChange={(e) => setPhoneNumber(e.target.value)}
          phoneNumber={phoneNumber}
        />
      );
    }
    case 2: {
      return (
        <CheckOTPForm
          phoneNumber={phoneNumber}
          onBack={() => setStep((s) => s - 1)}
        />
      );
    }
    default:
      return null;
  }
}

export default AuthContainer;
