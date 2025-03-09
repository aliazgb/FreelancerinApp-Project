import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import useCategory from "../hooks/useCategory";
import DatePickerField from "../ui/DatePickerField";
import RHFSelect from "../ui/RHFSelect";
import TextField from "../ui/TextField";
import useCreateProject from "./useCreateProject";
function CreateProjectForm() {
  const [date, setDate] = useState(new Date());
  const [tags, setTags] = useState([]);
  const { categories } = useCategory();
  const { createProject, isCreating } = useCreateProject();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    createProject(newProject)
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
        name={"budget"}
        type="number"
        validationSchema={{
          required: "بودجه ضروریست",
        }}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        required
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <button type="submit" className="btn btn--primary w-full mt-4">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
