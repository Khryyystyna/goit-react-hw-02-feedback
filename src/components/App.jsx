import Statistics from "./Statistics/Statistics";
import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }
    
    handleIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
    };

    handleIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
    };

    handleIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }));
    };

    countTotalFeedback = () => {
        const values = Object.values(this.state);
        return values.reduce((acc, value) => acc + value, 0);
    };

    
countPositiveFeedbackPercentage = (good, neutral, bad) => {
    let positivePercentage = 0;
    positivePercentage = Math.round((100 / (good + neutral + bad)) * (good + neutral));
    return positivePercentage;
  };
    
    
    render() {
        return (
          <Section title="Please leave feedback">

             <FeedbackOptions
            options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
            onLeaveFeedback={{
              good: this.handleIncrementGood,
              neutral: this.handleIncrementNeutral,
              bad: this.handleIncrementBad,}}/>

            <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    percentage={this.countPositiveFeedbackPercentage(
                      this.state.good, this.state.neutral, this.state.bad)} /> 
            
            <Notification
              message='There is no feedback'
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}/>
        </Section>
    )
}
};
