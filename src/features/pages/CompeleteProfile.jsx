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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-secondary-50 via-primary-100 to-primary-200 p-4">
    <div className="w-full max-w-md bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 rounded-3xl shadow-2xl p-8 space-y-8 transform transition-transform hover:-translate-y-2 hover:scale-105 duration-300">
      
      <h1 className="text-center text-3xl font-extrabold font-playfair text-secondary-900 drop-shadow-sm">
        Complete Your Profile
      </h1>
  
      <form className="space-y-6 text-secondary-700" onSubmit={handleSubmit(onSubmit)}>
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
  
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
  
  );
}

export default CompeleteProfile;
