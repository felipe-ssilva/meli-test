import React from 'react';
import renderer from 'react-test-renderer';

import BigPicture from '../BigPicture';

it('renders correctly', () => {
  const tree = renderer
    .create(<BigPicture src="/static/logo.png" alt="logo" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});