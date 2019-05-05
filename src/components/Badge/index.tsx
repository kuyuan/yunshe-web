import React from "react";
import { BlockedBadge, PendingBadge, ProBadge, Span, TeamBadge } from "./style";

interface BadgeProps {
  kind: "blocked" | "pending" | "moderator" | "admin" | "pro" | "default";
  label?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Badge = (props: BadgeProps): React.ReactElement => {
  const { kind, label, onClick, ...rest } = props;
  let Component = Span;
  switch (kind) {
    case "pro":
      Component = ProBadge;
    case "blocked":
      Component = BlockedBadge;
    case "pending":
      Component = PendingBadge;
    case "moderator":
    case "admin":
      Component = TeamBadge;
  }
  return (
    <Component
      onClick={onClick}
      {...rest}
    >
      {label || kind}
    </Component>
  );

};

export default Badge;
