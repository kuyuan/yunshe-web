import React from "react";
import Icon from "../Icon";
import {
  InputOverlay,
  PhotoInputImage,
  PhotoInputLabel,
  StyledHiddenInput,
  StyledInput,
  StyledLabel,
} from "./style";

const defaultAvatar = require('./img/default_avatar.svg');
const defaultCommunityCover = require('./img/default_community.svg');

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

export interface PhotoInputProps {
  size?: number;
  type: "user" | "community";
  defaultValue?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PhotoInput = (props: PhotoInputProps) => {
  const { size = 48, type, defaultValue, onChange } = props;

  let visible: boolean;
  let src = defaultValue;
  if (!src || src.length === 0) {
    visible = true;
    src = defaultCommunityCover;
    if (type === "user") {
      src = defaultAvatar;
    }
  }

  return (
    <PhotoInputLabel type={type} size={size}>
      <InputOverlay type={type} size={size} visible={visible}>
        <Icon glyph="photo" />
      </InputOverlay>

      <PhotoInputImage
        type={type}
        alt={"Profile photo"}
        src={src}
        size={size}
      />

      <StyledHiddenInput
        type="file"
        id="file"
        name="file"
        accept={".png, .jpg, .jpeg"}
        multiple={false}
        onChange={onChange}
      />
    </PhotoInputLabel>
  );
};
