import { shallow, mount } from "enzyme";
import ThemeProvider from "../../src/theme/ThemeProvider";

function wrapWithTheme(fn, children, options) {
  const wrapper = fn(withTheme(children), options);

  return wrapper;
}

export function withTheme(children) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export function shallowWithTheme() {
  return wrapWithTheme(shallow, ...arguments);
}

export function mountWithTheme() {
  return wrapWithTheme(mount, ...arguments);
}
