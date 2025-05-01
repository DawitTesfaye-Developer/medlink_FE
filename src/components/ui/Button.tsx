import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={rest.className}>
      {children}
    </button>
  );
};

export default Button;
