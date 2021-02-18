import React, { useState } from "react";
import Router from "next/router";

import * as Styled from "./SearchField.styles";

import TextField from "../../atoms/TextField";
import IconButton from "../../atoms/IconButton";
import SearchIcon from "../../../../static/search_icon.png";
import { ROUTES } from "../../../router/routes";

function SearchField() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    Router.push({
      pathname: ROUTES.ITEMS_LIST,
      query: { search }
    });
  }

  return (
    <Styled.SearchForm onSubmit={handleSubmit}>
      <TextField
        placeholder="Nunca dejes de buscar"
        value={search}
        onChange={handleChange}
      />
      <IconButton Icon={SearchIcon} backgroundColor="background.main" />
    </Styled.SearchForm>
  );
}

export default SearchField;
