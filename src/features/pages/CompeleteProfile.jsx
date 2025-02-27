import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { compeleteProfile } from "../service/authService";
import RadioInput from "../ui/RadioInput";
import TextField from "../ui/TextField";
function CompeleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: compeleteProfile,
  });
  const handleSubmit = () => {
    try {
      const { user, message } = mutateAsync({ name, email, role });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="container xl:w-[30%] ">
    <div className="pt-9">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type={"text"}
        />
        <TextField
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type={"text"}
        />
        <div className="flex justify-center gap-x-6">
          <RadioInput
            name="role"
            id="OWNER"
            value="OWNER"
            onChange={(e) => setRole(e.target.value)}
            checked={role == "OWNER"}
          />
          <RadioInput
            name="role"
            id="FREELANCER"
            value="FREELANCER"
            onChange={(e) => setRole(e.target.value)}
            checked={role == "FREELANCER"}
          />
        </div>
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
    </div>
  );
}

export default CompeleteProfile;
