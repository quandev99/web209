import React from "react";

type ButtonProps = {
  type?: "primary" | "danger";
  icon?: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

const Button = ({ type, icon, children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 border border-gray-400 rounded
                        ${type == "primary" && "bg-blue-500 text-white"}
                        ${type == "danger" && "bg-red-500 text-white"}
                        ${className}`}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
