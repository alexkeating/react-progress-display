# What is React Progress Display?
React progress display is a component library for either adding 
or building your own progress bar for your react projects. You
can either add one of our existing components or build your own
with our components.

## Example

```
  <div>
    <StepProgressBar className="progress-bar" steps={6} activeSteps={this.state.activeSteps} />
    <button onClick={() => this._onClickAdd(this.state.activeSteps, this.state.nextStep)}>Forward</button>
    <button onClick={() => this._onClickSubtract(this.state.activeSteps, this.state.nextStep)}>Backward</button>
  </div>
```


To explore more [examples](https://github.com/alexkeating/react-progress-bar/tree/master/examples/src), `git clone`, `npm install` and `npm start`.

## API
- [`<StepProgressBar>`](#StepProgressBar)
- [`<Step>`](#StepProgressBar)



### `<StepProgressBar>`

#### Props

##### Params
* `className`: A string representing the CSS classes to be added 
               to a div.
* `steps`: An integer indicating the number of step components
           in the progress bar.
* `activeSteps`: An array of integers indicating which steps have 
                 been completed.


### `<Step>`

#### Props

##### Params
* `className`: A string representing the CSS classes to be added 
               to a li.


