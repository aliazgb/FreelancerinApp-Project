import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { getOtp } from "../service/authService";
import CheckOTPForm from "./CheckOTPForm";
import SendOtpForm from "./SendOtpForm";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    isPending: isSendig,
    data: otpResponse,
    error,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);

      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  switch (step) {
    case 1: {
      return (
        <SendOtpForm
          onSubmit={sendOtpHandler}
          setStep={setStep}
          onChange={(e) => setPhoneNumber(e.target.value)}
          phoneNumber={phoneNumber}
          isSendig={isSendig}
        />
      );
    }
    case 2: {
      return (
        <CheckOTPForm
          phoneNumber={phoneNumber}
          onBack={() => setStep((s) => s - 1)}
          onSubmit={sendOtpHandler}
          otpResponse={otpResponse}
        />
      );
    }
    default:
      return null;
  }
}

export default AuthContainer;
