import React from 'react';
import { ProgressBar } from '../../src/ProgressBar';
import renderer from 'react-test-renderer';

test('ProgressBar snapshot', () => {
  const component = renderer.create(
    <ProgressBar steps={6} className='progress-bar' activeSteps={[0]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
