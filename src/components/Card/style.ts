import styled from "styled-components";
import theme from "../../theme";
import { FlexCol } from "../globals";
import { MEDIA_BREAK } from "../layout";

export const StyledCard = styled(FlexCol)`
  background: ${theme.bg.default};
  position: relative;
  width: 100%;
  max-width: 100%;
  background-clip: padding-box;
  overflow: visible;
  flex: none;

  @media (max-width: ${MEDIA_BREAK}px) {
    border-radius: 0;
    box-shadow: none;
  }
`;
