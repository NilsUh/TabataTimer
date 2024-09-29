import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClickCallback: () => void;
}

const Button = ({ children, onClickCallback }: ButtonProps) => {
  return (
    <button className="btn btn-light" onClick={onClickCallback}>
      {children}
    </button>
  );
};

export default Button;
