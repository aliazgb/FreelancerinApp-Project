import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../ui/TextField";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ projectId, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createProposal, isCreatingProposal } = useCreateProposal();
  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <TextField
          label={"توضیحات"}
          required
          errors={errors}
          register={register}
          name={"description"}
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "این فیلد حداقل باید دارای 10 کاراکتر باشد",
            },
          }}
        />
        <TextField
          label={"قیمت"}
          required
          errors={errors}
          register={register}
          name={"price"}
          type="number"
          validationSchema={{
            required: "بودجه ضروریست",
          }}
        />
        <TextField
          label={"مدت زمان"}
          required
          errors={errors}
          register={register}
          name={"duration"}
          type="number"
          validationSchema={{
            required: "بودجه ضروریست",
          }}
        />
        <button type="submit" className="btn btn--primary w-full mt-4">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CreateProposal;
