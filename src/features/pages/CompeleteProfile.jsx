import React, { useState } from "react";
import TextField from "../ui/TextField";

function CompeleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="pt-9">
      <form className="space-y-8">
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-center gap-x-6">
          <div className="flex gap-x-2">
            <input type="radio" name="role" id="OWNER" value="OWNER" />
            <label htmlFor="OWNER">کارفرما</label>
          </div>
          <div className="flex gap-x-2">
            <input
              type="radio"
              name="role"
              id="FREELANCER"
              value="FREELANCER"
            />
            <label htmlFor="FREELANCER">فریلنسر</label>
          </div>
        </div>
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CompeleteProfile;
