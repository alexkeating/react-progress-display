import React from 'react';
import renderer from 'react-test-renderer';
import StepExample from '../../examples/src/StepProgressBarExample';

test('StepExample snapshot', () => {
  const component = renderer.create(
    <StepExample />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

