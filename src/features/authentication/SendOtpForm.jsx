import { useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { getOtp } from "../service/authService";
import Loader from "../ui/Loader";
import TextField from "../ui/TextField";
function SendOtpForm({ setStep, onChange, phoneNumber }) {
  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  };
  return (
    <div>
      <form action="" className="space-y-4" onSubmit={sendOtpHandler}>
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          value={phoneNumber}
          onChange={onChange}
        />
        {isPending ? (
          <Loader />
        ) : (
          <button className="btn btn--primary w-full">ارسال کد تایید</button>
        )}
      </form>
    </div>
  );
}

export default SendOtpForm;
