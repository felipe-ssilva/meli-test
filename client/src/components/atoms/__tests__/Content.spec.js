import React from "react";
import renderer from "react-test-renderer";

import Content from "../Content";
import { withTheme } from "../../../../jest/utils/styled";

it("renders correctly", () => {
  const ThemedContent = withTheme(<Content>Test Content</Content>);
  const tree = renderer.create(ThemedContent).toJSON();
  expect(tree).toMatchSnapshot();
});
