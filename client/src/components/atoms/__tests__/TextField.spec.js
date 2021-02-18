import React from "react";
import renderer from "react-test-renderer";

import TextField from "../TextField";
import { withTheme } from "../../../../jest/utils/styled";

it("renders correctly", () => {
  const ThemedTextField = withTheme(<TextField />);
  const tree = renderer.create(ThemedTextField).toJSON();
  expect(tree).toMatchSnapshot();
});
