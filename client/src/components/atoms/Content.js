import styled, { css } from "styled-components";
import { theme } from "../../lib/styled";

export default styled.div`
  padding: 0 17vw;
  background-color: ${theme("palette.background.main")};

  ${({ theme }) => css`
    ${theme.breakpoints.down("sm")} {
      padding: 0 ${theme.spacing.double}px;
    }
  `}
`;
