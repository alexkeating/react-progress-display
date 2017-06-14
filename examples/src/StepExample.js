import React from 'react';
import { ProgressBar } from '../../src/ProgressBar.jsx';

export default class StepExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: 6,
      activeSteps: [],
      nextStep: 0
    };
  }

  _onClickAdd(activeSteps, nextStep) {
    let newNextStep = nextStep;
    if(this.state.steps > newNextStep){
      activeSteps.push(nextStep);
      newNextStep += 1;
    }

    this.setState({
      activeSteps: activeSteps,
      nextStep: newNextStep
    });
  };

  _onClickSubtract(activeSteps, nextStep) {
    let newNextStep = nextStep;
    if(newNextStep > 0 ){
      activeSteps.pop();
      newNextStep -= 1;
    }
    this.setState({
      activeSteps: activeSteps,
      nextStep: newNextStep
    });
  };

  render() {
    return (
      <div>
        <ProgressBar className="progress-bar" steps={6} activeSteps={this.state.activeSteps} />
        <button onClick={() => this._onClickAdd(this.state.activeSteps, this.state.nextStep)}>Forward</button>
        <button onClick={() => this._onClickSubtract(this.state.activeSteps, this.state.nextStep)}>Backward</button>
      </div>
    );
  }

}
