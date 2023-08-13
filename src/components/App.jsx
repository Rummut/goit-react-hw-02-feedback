import { Component } from 'react';
import { FeedbackResults } from './feedback/FeedbackResults';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  handleClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
        total: this.countTotalFeedback(),
        percentage: this.countPositiveFeedbackPercentage()
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    return Number.parseInt((good/this.countTotalFeedback())*100)
  }

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>

        <button type="button" onClick={() => {this.handleClick("good")}}>
          Good
        </button>
        <button type="button" onClick={() => {this.handleClick("neutral")}}>
          Neutral
        </button>
        <button type="button" onClick={() => {this.handleClick("bad")}}>
          Bad
        </button>
        <FeedbackResults state={this.state} ></FeedbackResults>
      </>
    );
  }
}
