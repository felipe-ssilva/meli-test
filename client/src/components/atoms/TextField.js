import styled from "styled-components";
import { theme } from "../../lib/styled";

export default styled.input`
  height: 40px;
  font-size: 18px;
  border: 0;
  outline: none;
  border-radius: 4px;
  padding: 0 ${theme('spacing.double')}px;
`;
