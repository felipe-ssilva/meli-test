import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as Styled from "./Breadcrumbs.styles";
import Link from "../../atoms/Link";

function Breadcrumbs({ links }) {
  function _renderBreadcrumbItem({ label, path }, isLast) {
    const BreadcrumbLink = <Link href={path}>{label}</Link>;

    if (isLast) {
      return <strong key={label}>{label}</strong>;
    }

    return (
      <Fragment key={label}>
        {BreadcrumbLink}
        <span>></span>
      </Fragment>
    );
  }

  function _renderBreadcrumbs() {
    const linksLen = links.length;
    return links.map((props, index) =>
      _renderBreadcrumbItem(props, index === linksLen - 1)
    );
  }

  return <Styled.Nav>{_renderBreadcrumbs()}</Styled.Nav>;
}

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string
    })
  )
};

export default Breadcrumbs;
