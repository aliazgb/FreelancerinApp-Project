import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { HiArrowSmLeft } from "react-icons/hi";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "../service/authService";

function CheckOTPForm({
  phoneNumber,
  onBack,
  onSubmit,
  otpResponse,
  otp,
  setOtp,
}) {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast.success(
          "Your profile is not verified! Please log in with the admin panel to verify your account."
        );
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    if (time === 0) return;
    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);
  return (
    <div className="container xl:w-[30%] ">
      <div className="pt-9">
        <button onClick={onBack}>
          <HiArrowSmLeft className="w-8 h-8 text-primary-900" />
        </button>
        {otpResponse && (
          <p>
            {otpResponse?.message}
            <button onClick={onBack}>
              <CiEdit />
            </button>
          </p>
        )}
        <div className="mb-4">
          {time > 0 ? (
            <p>{time} seconds until resending the code</p>
          ) : (
            <button onClick={onSubmit}>Resend verification code</button>
          )}
        </div>
        <form action="" className="space-y-8" onSubmit={checkOtpHandler}>
          <p className="font-bold text-secondary-0">
            Enter the verification code!
          </p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            containerStyle="flex  gap-x-2 justify-center"
            inputStyle={{
              width: "2.5rem",
              padding: "0.5rem 0.2rem",
              border: "1px solid rgb(var(--color-primary-300))",
              borderRadius: "0.5rem",
            }}
          />
          <button className="btn btn--primary w-full">Confirm</button>
        </form>
        
      </div>
    </div>
  );
}

export default CheckOTPForm;
