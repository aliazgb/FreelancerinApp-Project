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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-secondary-50 via-primary-100 to-primary-200 p-4">
    <div className="w-full max-w-md bg-gradient-to-br from-primary-100 via-primary-200 to-primary-100 rounded-3xl shadow-2xl p-8 space-y-8 transform transition-transform hover:-translate-y-2 hover:scale-105 duration-300">
      
      <button onClick={onBack} className="flex items-center gap-2 text-primary-900 hover:text-primary-700 transition-colors">
        <HiArrowSmLeft className="w-6 h-6" />
        <span className="font-semibold">Back</span>
      </button>
  
      {otpResponse && (
        <p className="text-secondary-700 flex items-center gap-2  rounded-lg px-3 py-2 shadow-sm">
          {otpResponse?.message}
          <button onClick={onBack} className="text-primary-900 hover:text-primary-700">
            <CiEdit />
          </button>
        </p>
      )}
  
      <form action="" className="space-y-6 text-secondary-700" onSubmit={checkOtpHandler}>
        <p className="font-bold text-center text-secondary-900 text-lg">
          Enter the verification code!
        </p>
  
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="mx-1 text-secondary-500">-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex gap-3 justify-center"
          inputStyle={{
            width: "60%",
            height: "3rem",
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "600",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.75rem",
            outline: "none",
          }}
        />
  
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
  
  );
}

export default CheckOTPForm;
