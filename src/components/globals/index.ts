import styled from "styled-components";

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Transition = {
  hover: {
    on: "all 0.2s ease-in",
    off: "all 0.2s ease-out",
  },
  reaction: {
    on: "all 0.15s ease-in",
    off: "all 0.1s ease-out",
  },
  dropdown: {
    off: "all 0.35s ease-out",
  },
};
