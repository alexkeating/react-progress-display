/**
 * Created by alexkeating on 6/6/17.
 */

// What will this progress bar do?
// 0.1.0 should be a straight line that can be partitioned.
// Add styling to steps and to progressbar
// Add proptypes
// Step styling should be flexible
// Figure out mechanism to make everything active

import React from 'react';
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

export { ProgressBar };
