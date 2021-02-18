import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import styled from "styled-components";

const A = styled.a`
  text-decoration: none;
  color: ${({ color }) => color};
`;

function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} prefetch>
      <A href={href} {...props.style}>
        {children}
      </A>
    </NextLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  style: PropTypes.object
};

Link.defaultProps = {
  style: {
    color: "inherit"
  }
};

export default Link;
