import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface DefaultInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  searchIcon?: boolean;
  labelText?: string;
}
