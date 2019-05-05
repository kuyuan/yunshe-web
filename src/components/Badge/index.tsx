import React from "react";
import Tooltip from "../Tooltip";
import { BlockedBadge, PendingBadge, ProBadge, Span, TeamBadge } from "./style";

export interface BadgeProps {
  kind: "blocked" | "pending" | "moderator" | "admin" | "pro" | "default";
  label?: string;
  tipText?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Badge = (props: BadgeProps): React.ReactElement => {
  const { kind, label, onClick, tipText } = props;
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
  const BaseComponent = (
    <Component
      onClick={onClick}
      kind="default"
    >
      {label || kind}
    </Component>
  );
  if (tipText) {
    return (
      <Tooltip content={tipText}>
        <span>
          {BaseComponent}
        </span>
      </Tooltip>
    );
  } else {
    return BaseComponent;
  }
};

export default Badge;
