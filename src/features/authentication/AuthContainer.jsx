import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getOtp } from "../service/authService";
import CheckOTPForm from "./CheckOTPForm";
import SendOtpForm from "./SendOtpForm";
import { sendOtpHandler } from "./sendOtpHandler";

function AuthContainer() {
  const { register, handleSubmit, getValues } = useForm();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [testerPhoneNumber, setTesterPhoneNumber] = useState("");
  const {
    isPending: isSendig,
    data: otpResponse,
    error,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  // const sendOtpHandler = async (data) => {
  //   console.log(data)
  //   try {
  //     const { message, otp } = await mutateAsync(data);
  //     setOtp(otp.toString());
  //     setStep(2);
  //     toast.success(message);
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };
  switch (step) {
    case 1: {
      return (
        <SendOtpForm
          onSubmit={handleSubmit((data) =>
            sendOtpHandler(
              data,
              mutateAsync,
              setOtp,
              setStep,
            )
          )}
          handleSubmit={handleSubmit}
          setStep={setStep}
          register={register}
          setOtp={setOtp}
          mutateAsync={mutateAsync}
        />
      );
    }
    case 2: {
      console.log(testerPhoneNumber);
      return (
        <CheckOTPForm
          register={register}
          phoneNumber={getValues("phoneNumber")}
          onBack={() => setStep((s) => s - 1)}
          otpResponse={otpResponse}
          isSendig={isSendig}
          onSubmit={handleSubmit(sendOtpHandler)}
          otp={otp}
          setOtp={setOtp}
        />
      );
    }
    default:
      return null;
  }
}

export default AuthContainer;
