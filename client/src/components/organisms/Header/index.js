import React from "react";
import Link from "next/link";

import * as Styled from "./Header.styles";
import MLIcon from "../../atoms/MLIcon";
import SearchField from "../../molecules/SearchField";
import Grid from "../../atoms/Grid";

function Header(props) {
  return (
    <Styled.Nav>
      <Grid col="1fr 9fr">
        <Link href="/">
          <MLIcon />
        </Link>
        <SearchField />
      </Grid>
    </Styled.Nav>
  );
}

export default Header;
