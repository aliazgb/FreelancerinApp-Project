import React from "react";
import { useForm } from "react-hook-form";
import RHFSelect from "../ui/RHFSelect";
const option = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];
function ChangeProposalStatus() {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {
    console.log("first");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          label="تغییر وضعیت"
          name={"status"}
          register={register}
          options={option}
          required
        />
        <button className="btn btn--primary w-full mt-5" type="submit">
          تایید
        </button>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
