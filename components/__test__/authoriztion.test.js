import React from 'react';
import renderer from 'react-test-renderer';
import Authorization from '../routers/authorization';

test('renders correctly', () => {
  const tree = renderer.create(<Authorization/>).toJSON();
  expect(tree).toMatchSnapshot();
});