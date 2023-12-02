import React from "react";

export const Input = (props) => {
  // Destructure specific props: type, name, register, and className.
  const { type, name, register, className } = props;
  // Return an <input> element with the specified attributes and props.
  return (
    <input
      type={type}
      name={name}
      id={name}
      // Spread the register function from props, which is used for form registration
      {...register}
      placeholder=""
      className={className}
    />
  );
};
