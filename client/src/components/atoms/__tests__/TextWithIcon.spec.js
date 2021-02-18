import React from "react";
import renderer from "react-test-renderer";

import TextWithIcon from "../TextWithIcon";
import { withTheme } from "../../../../jest/utils/styled";

it("renders correctly", () => {
  const ThemedTextWithIcon = withTheme(
    <TextWithIcon icon="/static/logo.png" alt="logo">
      Test TextWithIcon
    </TextWithIcon>
  );
  const tree = renderer.create(ThemedTextWithIcon).toJSON();
  expect(tree).toMatchSnapshot();
});
