import React from "react";
import {
  StyledInput,
  StyledLabel,
} from "./style";

export interface InputProps {
  children?: any;
  inputType?: "text" | "number" | "password";
  defaultValue?: string;
  value?: any;
  placeholder?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  size?: number;
  styles?: object;
}

export const Input = (props: InputProps) => {
  const {
    children, id, inputType, defaultValue, value, placeholder, onChange, autoFocus, disabled,
    ...rest
  } = props;
  return (
    <StyledLabel {...rest}>
      {children}
      <StyledInput
        id={id}
        type={inputType}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
        disabled={disabled}
      />
    </StyledLabel>
  );
};
