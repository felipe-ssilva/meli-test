import React from "react";
import styled from "styled-components";

import { theme } from "../../../lib/styled";

const MyFooter = styled.footer`
  height: ${theme("spacing.footer")}px;
`;

function Footer() {
  return <MyFooter />;
}

export default Footer;
