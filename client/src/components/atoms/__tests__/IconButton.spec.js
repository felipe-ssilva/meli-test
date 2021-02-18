import React from "react";
import renderer from "react-test-renderer";

import IconButton from "../IconButton";
import { withTheme } from "../../../../jest/utils/styled";

it("renders correctly", () => {
  const ThemedIconButton = withTheme(
    <IconButton Icon="/static/logo.png">Test IconButton</IconButton>
  );
  const tree = renderer.create(ThemedIconButton).toJSON();
  expect(tree).toMatchSnapshot();
});
