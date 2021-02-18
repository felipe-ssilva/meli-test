const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

const breakpointsLimit = Object.keys(breakpoints).reduce(
  (prev, cur, curIndex, keys) => {
    const limit = breakpoints[keys[curIndex + 1]] - 1;
    return {
      ...prev,
      [cur]: limit
    };
  },
  {}
);

export default {
  ...breakpoints,
  up: bp => `@media (min-width: ${breakpoints[bp]}px)`,
  down: bp => `@media (max-width: ${breakpointsLimit[bp]}px)`,
  only: bp =>
    `@media (min-width: ${breakpoints[bp]})${
      breakpointsLimit[bp] ? ` and (max-width: ${breakpointsLimit[bp]}px)` : ""
    }`
};
