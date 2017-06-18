import React from 'react';
import { Step } from '../../src/Step';
import renderer from 'react-test-renderer';

test('Step active snapshot', () => {
  const component = renderer.create(
    <Step className='active' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Step disabled snapshot', () => {
  const component = renderer.create(
    <Step className='disabled' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
