import  { Component } from 'react'
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <div className="w-50  p-5 text-warning bg-primary rounded-4 mx-auto my-4">
          <Section title={'Please leave feedback'}>
            <FeedbackOptions handleFeedbackClick={this.handleFeedbackClick} />
          </Section>
          <Section title={'Statistics'}>
            {total > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positiveFeedback={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message={'There is no feedback'}  />
            )}
          </Section>
        </div>
      </>
    );
  }
}




export default App;