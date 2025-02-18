import { useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { getOtp } from "../service/authService";
import Loader from "../ui/Loader";
import TextField from "../ui/TextField";
function SendOtpForm({ onChange, phoneNumber, onSubmit,isSendig }) {
  return (
    <div>
      <form action="" className="space-y-4" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          value={phoneNumber}
          onChange={onChange}
        />
        {isSendig ? (
          <Loader />
        ) : (
          <button className="btn btn--primary w-full">ارسال کد تایید</button>
        )}
      </form>
    </div>
  );
}

export default SendOtpForm;
