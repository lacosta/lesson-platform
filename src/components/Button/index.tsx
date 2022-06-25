// @packages
import { ReactNode } from "react";
import { Link } from "react-router-dom";

// @own
import "./index.css";

interface ButtonProps {
  children: ReactNode;
  variant: string;
}

function Button(props: ButtonProps) {
  return (
    <Link
      to="/"
      className={`${
        props.variant === "primary" ? "btn-primary" : "btn-secondary"
      }`}
    >
      {props.children}
    </Link>
  );
}

export default Button;
