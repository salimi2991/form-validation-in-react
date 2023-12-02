import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../Validation/userValidation";
import { inputData } from "../Input/inputData";
import { Input } from "../Input/input";

export const Form = () => {
  // Destructure and initialize variables from the useForm hook, including register, handleSubmit, and errors.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // Use the yupResolver with the userSchema for form validation.
    resolver: yupResolver(userSchema),
  });

  // Log any validation errors to the console.
  console.log(errors);

  // Define a function to handle form submission.
  const onSubmit = (data) => {
    // Log the form data when the form is submitted.
    console.log("Form data:", data);
  };
  // Return the JSX for rendering the form.
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Define the form and specify the onSubmit handler. */}
      <div className="row">
        {inputData.map((inputField, i) => (
          // Map over the inputData array to create form input fields dynamically.
          <div
            className={`mb-2 ${
              inputField.type === "tel" ? "col-md-12" : "col-md-6"
            }`}
            key={i}
          >
            <div className="form-outline position-relative">
              <Input
                type={inputField.type}
                name={inputField.name}
                id={inputField.name}
                // Register each input field with react-hook-form.
                register={register(inputField.name)}
                className="form-control form-control-lg"
              />
              <label
                className="form-label mb-0 position-absolute bg-white text-capitalize"
                htmlFor={inputField.name}
              >
                {inputField.label}
              </label>
            </div>
            <p className="text-danger ms-2 mt-1 small">
              {/* Display any validation error message for the current input field. */}
              {errors[inputField.name]?.message}
            </p>
          </div>
        ))}
        <div className="mt-2 pt-2">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-lg w-100 text-uppercase"
          />
        </div>
      </div>
    </form>
  );
};
