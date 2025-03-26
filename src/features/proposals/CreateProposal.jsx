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
          label={"Description"}
          required
          errors={errors}
          register={register}
          name={"description"}
          validationSchema={{
            required: "Description is required",
            minLength: {
              value: 10,
              message: "This field must have at least 10 characters",
            },
          }}
        />
        <TextField
          label={"Price"}
          required
          errors={errors}
          register={register}
          name={"price"}
          type="number"
          validationSchema={{
            required: "Price is required",
          }}
        />
        <TextField
          label={"Duration"}
          required
          errors={errors}
          register={register}
          name={"duration"}
          type="number"
          validationSchema={{
            required: "Duration is required",
          }}
        />
        <button type="submit" className="btn btn--primary w-full mt-4">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default CreateProposal;
