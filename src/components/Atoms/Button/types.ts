import { ButtonHTMLAttributes, ReactNode } from 'react';

export type TButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;