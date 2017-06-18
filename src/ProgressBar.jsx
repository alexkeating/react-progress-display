import React from 'react';
import PropTypes from 'prop-types';
import { Step } from './Step.jsx';

const ProgressBar = ({className, steps, activeSteps}) => {
  const numberOfSteps = Array.apply(null, {length: steps}).map(Number.call, Number);
  const listOfSteps = numberOfSteps.map(step => {
    return activeSteps.includes(step) ? <Step className='active' key={step} /> :
    <Step className='disabled' key={step} />;
  });

  return (
    <div className={className}>
      {listOfSteps}
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.number,
  activeSteps: PropTypes.arrayOf(PropTypes.number)
};

ProgressBar.defaultProps = {
  className: '',
  steps: 0,
  activeSteps: [],
};

export { ProgressBar };
