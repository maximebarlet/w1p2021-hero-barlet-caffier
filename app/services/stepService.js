/**
 ** Handles steps to allow game resume using localStorage
 * @class step
 */
class Step {
  constructor() {
    this.step = localStorage.getItem('step') || 1;
    this.steps = [];
    localStorage.setItem('step', this.step);
  }
  /**
   ** Set the step of the game component.
   ** This step is the question's number in the data.json file.
   * @param {Number} step the step you want to set the user to
   * @memberof step
   */
  set(step) {
    localStorage.setItem('step', step);
    this.step = step;
    this.steps.push(step);
    localStorage.setItem('steps', JSON.stringify(this.steps));
  }
  /**
   * @returns current step
   * @memberof step
   */
  get() {
    return localStorage.getItem('step');
  }
  getSteps() {
    return JSON.parse(localStorage.getItem('steps'));
  }
}

module.exports = new Step();
