import { PropsWithChildren } from "react";

const Button = ({ className, children }: PropsWithChildren<{className?: string}>) => {
  return (
    <button className={`btn ${className ? className : ""}`}>
      {children}
    </button>
  )
}

export default Button;
