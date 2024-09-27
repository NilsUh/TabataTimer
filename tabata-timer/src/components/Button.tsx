import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="btn btn-light">{children}</button>;
};

export default Button;
