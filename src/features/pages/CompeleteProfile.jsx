import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { compeleteProfile } from "../service/authService";
import RadioInput from "../ui/RadioInput";
import TextField from "../ui/TextField";
function CompeleteProfile() {
  const { register, handleSubmit, watch } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: compeleteProfile,
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="container xl:w-[30%] ">
      <div className="pt-9">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            type={"text"}
            validationSchema={{ required: "وارد نام  ضروری است" }}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            type={"text"}
            validationSchema={{ required: "وارد کردن ایمیل  ضروری است" }}
          />
          <div className="flex justify-center gap-x-6">
            <RadioInput
              watch={watch}
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              register={register}
              label="فریلنسر"
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
            />
            <RadioInput
              watch={watch}
              name="role"
              id="OWNER"
              value="OWNER"
              register={register}
              label="کارفرما"
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
            />
          </div>
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompeleteProfile;
