import { ButtonHTMLAttributes } from "react";

export type TRefreshProps = {
  onClick: () => void;
  disabled: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;