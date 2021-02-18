import styled from "styled-components";
import { theme } from "../../../lib/styled";

export const Nav = styled.nav`
  display: flex;
  color: ${theme("palette.text.light")};
  margin: ${theme`spacing.double`}px 0;

  & > span {
    margin: 0 ${theme`spacing.unit`}px;
  }
`;
