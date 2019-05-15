import styled from "styled-components";
import theme from "../../theme";
import { hexa } from "../../utils/color";
import { FlexCol, Transition, zIndex } from "../globals";
import { InputProps, PhotoInputProps } from "./index";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.4px;
  color: ${theme.text.default};
  transition: ${Transition.hover.off};
  position: relative;

  a {
    text-decoration: underline;
  }

  &:hover > input,
  &:hover > textarea {
    border-color: ${(p: InputProps) => p.disabled ? theme.bg.border : theme.text.alt};
    transition: ${Transition.hover.on};
  }

  &:hover > input:focus,
  &:hover > textarea:focus {
    border-color: ${(p: InputProps) => p.disabled ? theme.bg.inactive : theme.brand.alt};
  }
`;

export const StyledInput = styled.input`
  flex: 1 0 auto;
  background: ${(p: InputProps) => p.disabled ? theme.bg.wash : theme.bg.default};
  font-weight: 500;
  width: 100%;
  font-size: 14px;
  border: 2px solid ${(p: InputProps) => p.disabled ? theme.bg.border : theme.bg.inactive};
  border-radius: 4px;
  padding: 8px 12px;
  margin-top: 2px;
  box-shadow: none;
  transition: ${Transition.hover.off};

  &::-webkit-input-placeholder {
    color: ${theme.text.placeholder};
  }
  &:-moz-placeholder {
    color: ${theme.text.placeholder};
  }
  &:-ms-input-placeholder {
    color: ${theme.text.placeholder};
  }

  &:focus {
    border-color: ${theme.brand.default};
    transition: ${Transition.hover.on};
  }
`;

export const ImageInputWrapper = styled(FlexCol)`
  position: relative;
  flex: 0 0 auto;
  margin-top: 8px;
  margin-bottom: 24px;
  max-width: 342px;

  > label:nth-of-type(2) {
    position: absolute;
    bottom: -24px;
    left: 16px;
  }
`;

export const PhotoInputLabel = styled.label`
  position: relative;
  height: ${(p: PhotoInputProps) => `${p.size}px`};
  z-index: ${zIndex.form + 1};
  width: ${(p: PhotoInputProps) => `${p.size}px`};
  border-radius: ${(p: PhotoInputProps) => p.type === "user" ? `${p.size}px` : "8px"};
  margin-top: 8px;
  background-color: ${theme.bg.reverse};
`;

export const PhotoInputImage = styled.img`
  width: ${(p: PhotoInputProps) => `${p.size}px`};
  height: ${(p: PhotoInputProps) => `${p.size}px`};
  border-radius: ${(p: PhotoInputProps) => p.type === "user" ? `${p.size}px` : "8px"};
  box-shadow: 0 0 0 2px ${theme.bg.default};
`;

interface InputOverlayProps {
  type?: "user" | "community";
  visible?: boolean;
  size?: number;
}

export const InputOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${zIndex.form + 2};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${theme.text.reverse};
  background-color: ${hexa(theme.bg.reverse, 0.6)};
  border-radius: ${(p: InputOverlayProps) => p.type === "user" ? `${p.size}px` : "8px"};
  opacity: ${(p: InputOverlayProps) => (p.visible ? "1" : "0")};
  transition: ${Transition.hover.off};

  &:hover {
    opacity: 1;
    transition: ${Transition.hover.on};
    cursor: pointer;

    + img,
    + div {
      transition: ${Transition.hover.on};
      opacity: 0.25;
    }
  }

  &:hover div {
    transition: ${Transition.hover.on};
  }
`;

export const StyledHiddenInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const CoverInputLabel = styled.label`
  position: relative;
  height: 114px;
  max-width: 342px;
  z-index: ${zIndex.form};
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  background-color: ${theme.bg.reverse};
`;

interface CoverImageProps {
  src: string;
}

export const CoverImage = styled.div`
  background-color: ${theme.brand.default};
  background-image: url('${(p: CoverImageProps) => p.src}');
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: ${zIndex.form};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 114px;
  border-radius: 8px;
`;
