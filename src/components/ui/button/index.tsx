import React, { PropsWithChildren } from "react";
import classNames from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { className, children, ...rest } = props;

  return (
    <button className={classNames("btn", className)} {...rest}>
      {children}
    </button>
  )
}

export default Button;
