import styled, { css } from "styled-components";
import theme from "../../theme";
import { Transition } from "../globals";
import { InputProps } from "./index";

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
