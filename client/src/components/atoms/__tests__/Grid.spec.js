import React from "react";
import renderer from "react-test-renderer";

import Grid from "../Grid";
import { withTheme } from "../../../../jest/utils/styled";

it("renders correctly", () => {
  const ThemedGrid = withTheme(<Grid col="2fr 6fr 2fr">
    <div>Grid 1</div>
    <div>Grid 2</div>
    <div>Grid 3</div>
  </Grid>);
  const tree = renderer.create(ThemedGrid).toJSON();
  expect(tree).toMatchSnapshot();
});
