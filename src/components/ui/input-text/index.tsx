import classNames from "classnames";
import React from "react";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputText = (props: InputProps) => {
  const {className, type, ...rest} = props;
  return (
    <input type="text" className={classNames(className, "input-text")} {...rest} />
  )
}

export default InputText;
