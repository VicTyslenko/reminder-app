import type { AllHTMLAttributes, ReactNode } from "react";

export interface Props extends AllHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
}
