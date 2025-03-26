import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getOtp } from "../service/authService";
import CheckOTPForm from "./CheckOTPForm";
import SendOtpForm from "./SendOtpForm";

function AuthContainer() {
  const { register, handleSubmit,getValues } = useForm();
  const [step, setStep] = useState(1);

  const {
    isPending: isSendig,
    data: otpResponse,
    error,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (data) => {
  
    try {
      const { message,otp } = await mutateAsync(data);
      toast.success(otp)
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  switch (step) {
    case 1: {
      return (
        <SendOtpForm
          onSubmit={handleSubmit(sendOtpHandler)}
          setStep={setStep}
          register={register}
          // isSendig={isSendig}
        />
      );
    }
    case 2: {
      return (
        <CheckOTPForm
          register={register}
          phoneNumber={getValues("phoneNumber")}
          onBack={() => setStep((s) => s - 1)}
          otpResponse={otpResponse}
          isSendig={isSendig}
        />
      );
    }
    default:
      return null;
  }
}

export default AuthContainer;
