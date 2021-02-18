import { theme } from "../styled";

it("returns selected theme property", () => {
  const props = {
    theme: {
      palette: {
        main: "#fff"
      }
    }
  };

  expect(theme("palette.main")(props)).toBe("#fff");
});
