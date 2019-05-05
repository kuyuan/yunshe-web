import React from "react";
import { StyledCard } from "./style";

interface CardProps {
  children: any;
  style: object;
}

const Card = (props: CardProps): React.ReactElement => {
  const { children } = props;
  return (
    <StyledCard {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;
