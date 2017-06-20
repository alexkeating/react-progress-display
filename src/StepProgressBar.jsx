import React from 'react';
import PropTypes from 'prop-types';
import { Step } from './Step.jsx';

const StepProgressBar = ({className, steps, activeSteps}) => {
  const numberOfSteps = Array.apply(null, {length: steps}).map(Number.call, Number);
  const listOfSteps = numberOfSteps.map(step => {
    return activeSteps.includes(step) ? <Step className='progress-bar-active' key={step} /> :
    <Step className='progress-bar-disabled' key={step} />;
  });

  return (
    <div className={className}>
      {listOfSteps}
    </div>
  );
};

StepProgressBar.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.number,
  activeSteps: PropTypes.arrayOf(PropTypes.number)
};

StepProgressBar.defaultProps = {
  className: '',
  steps: 0,
  activeSteps: [],
};

export { StepProgressBar };
