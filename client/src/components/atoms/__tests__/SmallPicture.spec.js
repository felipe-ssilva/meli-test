import React from "react";
import renderer from "react-test-renderer";

import SmallPicture from "../SmallPicture";
import { withTheme } from "../../../../jest/utils/styled";

it("renders correctly", () => {
  const ThemedSmallPicture = withTheme(
    <SmallPicture src="/static/logo.png" alt="logo">
      Test SmallPicture
    </SmallPicture>
  );
  const tree = renderer.create(ThemedSmallPicture).toJSON();
  expect(tree).toMatchSnapshot();
});
