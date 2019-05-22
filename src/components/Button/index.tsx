import React from "react";
import {
  A,
  StyledHoverWarnOutlineButton,
  StyledLink,
  StyledOutlineButton,
  StyledPrimaryButton,
  StyledPrimaryOutlineButton,
  StyledTextButton,
  StyledWarnButton,
  StyledWhiteButton,
  StyledWhiteIconButton,
  StyledWhiteOutlineButton,
} from "./style";

interface To {
  pathname?: string;
  search?: string;
  state?: object;
}

type ButtonKind =
  "default" |
  "primary" |
  "warning" |
  "outline" |
  "light-icon" |
  "light-outline" |
  "warn-outline" |
  "primary-outline" |
  "text";

export interface ButtonProps {
  kind?: ButtonKind;
  size?: "small";
  disabled?: boolean;
  href?: string;
  target?: string;
  to?: To;
  isLoading?: boolean;
  children?: any;
  as?: "div";
}

const Button = (props: ButtonProps): React.ReactElement => {
  const { kind, disabled, href, target, to, isLoading, children, as } = props;
  let Component = StyledWhiteButton;
  switch (kind) {
    case "primary":
      Component = StyledPrimaryButton;
      break;
    case "warning":
      Component = StyledWarnButton;
      break;
    case "outline":
      Component = StyledOutlineButton;
      break;
    case "light-icon":
      Component = StyledWhiteIconButton;
      break;
    case "warn-outline":
      Component = StyledHoverWarnOutlineButton;
      break;
    case "primary-outline":
      Component = StyledPrimaryOutlineButton;
      break;
    case "light-outline":
      Component = StyledWhiteOutlineButton;
      break;
    case "text":
      Component = StyledTextButton;
      break;
  }
  const button = (
    <Component as={as} disabled={disabled || isLoading}>
      {children}
    </Component>
  );
  if (href) {
    return (
      <A
        href={href}
        target={target || "_blank"}
        rel={!target ? "noopener noreferrer" : undefined}
      >
        {button}
      </A>
    );
  }
  if (to) {
    return (
      <StyledLink to={to}>
        {button}
      </StyledLink>
    );
  }
  return button;
};

export default Button;
