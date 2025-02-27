import React from "react";
import Loader from "../ui/Loader";
import TextField from "../ui/TextField";
function SendOtpForm({ onChange, phoneNumber, onSubmit, isSendig }) {
  return (
    <div className="container xl:w-[30%]">
      <div className="pt-9">
        <form action="" className="space-y-6" onSubmit={onSubmit}>
          <TextField
            label="شماره موبایل"
            name="phonenumber"
            value={phoneNumber}
            onChange={onChange}
            type={"number"}
          />
          {isSendig ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full">ارسال کد تایید</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default SendOtpForm;
