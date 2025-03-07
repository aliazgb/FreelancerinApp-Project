import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../ui/TextField";
function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"عنوان"}
        required
        errors={errors}
        register={register}
        name={"title"}
        validationSchema={{
        required: "پر شدن این فیلد ضروریست",
        minLength: {
            value: 10,
            message: "این فیلد حداقل باید دارای 20 کاراکتر باشد",
          },
        }}
      />
      <TextField
        label={"توضیحات"}
        required
        errors={errors}
        register={register}
        name={"description"}
        validationSchema={{
          required: "پر شدن این فیلد ضروریست",
          minLength: {
            value: 15,
            message: "این فیلد حداقل باید دارای 20 کاراکتر باشد",
          },
        }}
      />
      <TextField
        label={"بودجه"}
        required
        errors={errors}
        register={register}
        name={"budge"}
        type="number"
        validationSchema={{
          required: "بودجه ضروریست",
         
        }}
      />
      <button type="submit" className="btn btn--primary w-full mt-4">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
