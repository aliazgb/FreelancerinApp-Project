import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { HiArrowSmRight } from "react-icons/hi";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "../service/authService";

function CheckOTPForm({ phoneNumber, onBack, onSubmit, otpResponse }) {
  const [otp, setOtp] = useState("");
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
        toast.success("پروفایل شما در انتظار بررسی است !");
        return;
      }
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
        <HiArrowSmRight className="w-6 h-6 text-secondary-500" />
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
          <p>{time}ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onSubmit}>ارسال مجدد کد تایید</button>
        )}
      </div>
      <form action="" className="space-y-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید !</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
    </div>
  );
}

export default CheckOTPForm;
