import * as Yup from "yup";

// Define a validation schema for user data using Yup.
export const userSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  userName: Yup.string().required("User Name is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters")
    .max(15, "Password must not exceed 15 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one of the special characters (@$!%*?&_)"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10,}$/, "Phone number must contain at least 10 digits")
    .required("Phone number is required"),
});
