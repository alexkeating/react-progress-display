import React from 'react';
import { StepProgressBar } from '../../src/StepProgressBar';
import renderer from 'react-test-renderer';

test('StepProgressBar snapshot', () => {
  const component = renderer.create(
    <StepProgressBar steps={6} className='progress-bar' activeSteps={[0]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
