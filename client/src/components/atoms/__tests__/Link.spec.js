import React from "react";
import renderer from "react-test-renderer";
// import Router from "next/router";

import Link from "../Link";
import { withTheme } from "../../../../jest/utils/styled";

jest.mock('next/router')

// const mockedRouter = { push: jest.fn(), prefetch: jest.fn() };
// Router.router = mockedRouter;

it("renders correctly", () => {
  const ThemedLink = withTheme(<Link href="/">Test Link</Link>);
  const tree = renderer.create(ThemedLink).toJSON();
  expect(tree).toMatchSnapshot();
});
