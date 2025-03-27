import React from "react";
import Loader from "../ui/Loader";
import TextField from "../ui/TextField";
function SendOtpForm({ onSubmit, isSendig, register }) {
  return (
    <div className="container xl:w-[30%]">
      <div className="pt-9">
        <form action="" className="space-y-6" onSubmit={onSubmit}>
          <TextField
            label="PhoneNumber"
            name="phoneNumber"
            register={register}
          />
          {isSendig ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              verification code
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default SendOtpForm;
