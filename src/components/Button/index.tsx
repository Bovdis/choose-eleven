import clsx from "clsx";
import React, { FC } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  disabled?: boolean;
  displayFlex?: boolean;
  onClick: () => void;
  text: string;
}

const Button: FC<ButtonProps> = ({ disabled, displayFlex, onClick, text }) => {
  return (
    <button
      className={clsx(styles.addUserBtn, displayFlex && styles.displayFlex)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
