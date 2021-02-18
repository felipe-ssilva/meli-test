import styled from "styled-components";
import { theme } from "../../../lib/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: ${theme("spacing.double")}px;
`;

export const ConditionSpan = styled.span`
  font-size: 14px;
  margin: ${theme("spacing.double")}px 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Price = styled.span`
  font-size: 46px;
  margin: ${theme("spacing.quadruple")}px 0;
`;
