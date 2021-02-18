import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import get from "lodash/get";

const Button = styled.button`
  border: 0px;
  height: 40px;
  width: 40px;
  background-color: ${({ theme, backgroundColor }) =>
    get(theme.palette, backgroundColor)};
`;

function IconButton({ type, backgroundColor, Icon }) {
  return (
    <Button type={type} backgroundColor={backgroundColor}>
      <img src={Icon} />
    </Button>
  );
}

IconButton.propTypes = {
  Icon: PropTypes.node.isRequired,
  type: PropTypes.string,
  backgroundColor: PropTypes.string
};

IconButton.defaultProps = {
  type: "button",
  backgroundColor: "transparent"
};

export default IconButton;
