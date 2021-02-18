import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../lib/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  height: 20;
  width: 20;
  margin: 0 ${theme("spacing.unit")}px;
`;

function TextWithIcon({ className, children, icon, alt }) {
  return (
    <Wrapper className={className}>
      <span>{children}</span>
      <Icon src={icon} alt={alt} />
    </Wrapper>
  );
}

TextWithIcon.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default styled(TextWithIcon)``;
