import styled from "styled-components";

import { theme } from "../../../lib/styled";
import TextWithIcon from "../../atoms/TextWithIcon";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme("palette.white")};
`;

export const Article = styled.article`
  display: flex;
  color: ${theme("palette.text.dark")};
  padding: ${theme("spacing.double")}px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${theme('palette.background.dark')};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theme("palette.background.main")};
  }

  & > img {
    margin-right: ${theme('spacing.double')}px;
  }
`;

export const ProductInfo = styled.section`
  flex: 2;

  h1 {
    font-size: 18px;
    font-weight: 400;
    padding: ${theme("spacing.double")}px 0;
    margin: 0;
  }

  & > span {
    display: flex;
    font-size: 24px;
    padding: ${theme("spacing.double")}px 0;
  }

  ${TextWithIcon} {
    font-size: 24px;
    padding: ${theme("spacing.double")}px 0;
  }
`;

export const CityInfo = styled.section`
  flex: 1;

  h2 {
    flex: 1;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
  }
`;
