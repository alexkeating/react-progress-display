import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ className }) => {
  return (
    <li className={className} >
      <span />
    </li>
  );
};

Step.propTypes = {
  className: PropTypes.string,
};

Step.defaultProps = {
  className: '',
};

export { Step };
