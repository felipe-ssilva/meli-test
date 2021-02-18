import React from "react";
import renderer from "react-test-renderer";

import MLIcon from "../MLIcon";
import { withTheme } from "../../../../jest/utils/styled";

it("renders correctly", () => {
  const ThemedMLIcon = withTheme(<MLIcon />);
  const tree = renderer.create(ThemedMLIcon).toJSON();
  expect(tree).toMatchSnapshot();
});
