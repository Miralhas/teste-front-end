import React, { PropsWithChildren } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { className, children, ...rest } = props;
  return (
    <button className={`btn ${className ? className : ""}`} {...rest}>
      {children}
    </button>
  )
}

export default Button;
