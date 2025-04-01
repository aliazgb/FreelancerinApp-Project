import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { compeleteProfile } from "../service/authService";
import RadioInput from "../ui/RadioInput";
import TextField from "../ui/TextField";
function CompeleteProfile() {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: compeleteProfile,
  });
  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);

      toast.success("GO Admin panel and Verify your Account", {
        position: "top-center",
        duration: 6000,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/auth");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="container xl:w-[30%] ">
      <div className="pt-9">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Full Name"
            name="name"
            register={register}
            type="text"
            validationSchema={{ required: "Entering a name is required" }}
          />
          <TextField
            label="Email"
            name="email"
            register={register}
            type="text"
            validationSchema={{ required: "Entering an email is required" }}
          />
          <div className="flex justify-center gap-x-6">
            <RadioInput
              watch={watch}
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              register={register}
              label="Freelancer"
              validationSchema={{ required: "Selecting a role is required" }}
            />
            <RadioInput
              watch={watch}
              name="role"
              id="OWNER"
              value="OWNER"
              register={register}
              label="Owner"
              validationSchema={{ required: "Selecting a role is required" }}
            />
          </div>

          <button type="submit" className="btn btn--primary w-full">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompeleteProfile;
