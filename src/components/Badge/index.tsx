import React from "react";
import { BlockedBadge, PendingBadge, ProBadge, Span, TeamBadge } from "./style";

export interface BadgeProps {
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
      break;
    case "blocked":
      Component = BlockedBadge;
      break;
    case "pending":
      Component = PendingBadge;
      break;
    case "moderator":
    case "admin":
      Component = TeamBadge;
      break;
  }
  return (
    <Component
      onClick={onClick}
      kind="default"
      {...rest}
    >
      {label || kind}
    </Component>
  );

};

export default Badge;
