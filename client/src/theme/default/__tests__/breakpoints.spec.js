import breakpoints from '../breakpoints'

it('returns up media query from choosed breakpoint', () => {
  const mediaQuery = breakpoints.up('sm');
  const expectedMediaQuery = `@media (min-width: ${breakpoints.sm}px)`;

  expect(mediaQuery).toBe(expectedMediaQuery)
})

it('returns down media query from choosed breakpoint', () => {
  const mediaQuery = breakpoints.down('sm');
  const expectedMediaQuery = `@media (max-width: ${breakpoints.md-1}px)`;

  expect(mediaQuery).toBe(expectedMediaQuery)
})

it('returns only media query from choosed breakpoint', () => {
  const mediaQuery = breakpoints.only('sm');
  const expectedMediaQuery = `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md - 1}px)`

  expect(mediaQuery).toBe(expectedMediaQuery)
})

it('returns only media query from choosed breakpoint (last case when has not next breakpoint to set limit)', () => {
  const mediaQuery = breakpoints.only('xl');
  const expectedMediaQuery = `@media (min-width: ${breakpoints.xl})`

  expect(mediaQuery).toBe(expectedMediaQuery)
})