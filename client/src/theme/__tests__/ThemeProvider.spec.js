import { shallow } from "enzyme";

import ThemeProvider from "../ThemeProvider";
import defaultTheme from "../default";

it("renders with theme properties", () => {
  const theme = {
    spacing: {
      unit: 8,
    }
  }
  const ThemedComponent = shallow(
    <ThemeProvider theme={theme}>
      <p>Test Paragraph</p>
    </ThemeProvider>
  );

  expect(ThemedComponent.props().theme).toMatchObject(theme);
});

it("renders with default theme", () => {
  const ThemedComponent = shallow(
    <ThemeProvider>
      <p>Test Paragraph</p>
    </ThemeProvider>
  );

  expect(ThemedComponent.props().theme).toMatchObject(defaultTheme);
});
