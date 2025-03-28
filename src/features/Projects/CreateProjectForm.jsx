import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import useCategory from "../hooks/useCategory";
import DatePickerField from "../ui/DatePickerField";
import RHFSelect from "../ui/RHFSelect";
import TextField from "../ui/TextField";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";
function CreateProjectForm({ onClose, editProject = {} }) {
  const { _id: editId } = editProject;
  const isEditSession = Boolean(editId);
  const { categories } = useCategory();
  const { selectEdit, isEditing } = useEditProject();
  const {
    budget,
    title,
    description,
    deadline,
    category,
    tags: prevTags,
  } = editProject;
  let editValue = {};
  if (isEditSession) {
    editValue = {
      title,
      budget,
      description,
      deadline,
      category: category._id,
    };
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: editValue });
  const [date, setDate] = useState(new Date(deadline || ""));
  const [tags, setTags] = useState(prevTags || []);

  const { createProject, isCreating } = useCreateProject();
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      selectEdit(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"Title"}
        required
        errors={errors}
        register={register}
        name={"title"}
        validationSchema={{
          required: "Filling this field is required",
          minLength: {
            value: 5,
            message: "This field must have at least 20 characters",
          },
        }}
      />
      <TextField
        label={"Description"}
        required
        errors={errors}
        register={register}
        name={"description"}
        validationSchema={{
          required: "Filling this field is required",
          minLength: {
            value: 15,
            message: "This field must have at least 20 characters",
          },
        }}
      />
      <TextField
        label={"Budget"}
        required
        errors={errors}
        register={register}
        name={"budget"}
        type="number"
        validationSchema={{
          required: "Budget is required",
        }}
      />
      <RHFSelect
        label="Category"
        name="category"
        register={register}
        required
        options={categories}
        errors={errors}
        validationSchema={{
          required: "Category is required",
        }}
      />
      <div>
        <label className="mb-2 block text-secondary-700">Tags</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="Deadline" />
      <button type="submit" className="btn btn--primary w-full mt-4">
        Confirm
      </button>
    </form>
  );
}

export default CreateProjectForm;
