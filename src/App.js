import React, { Component } from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

const instructions = () => (
  <div className="instructions">
    <ol>
      <li className="done">Create TWO new components: UserInput and UserOutput</li>
      <li className="done">UserInput should hold an input element, UserOutput two paragraphs</li>
      <li className="done">Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
      <li className="done">Pass a userName (of your choice) to UserOutput via props and display it there</li>
      <li className="done">Add state to the App component (=> the userName) and pass the userName to the UserOutput component</li>
      <li className="done">Add a method to manipulate the state (=> an event-handler method)</li>
      <li className="done">Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
      <li className="done">Ensure that the new input entered by the user overwrites the old userName passed to UserOutput</li>
      <li className="done">Add two-way-binding to your input (in UserInput) to also display the starting userName</li>
      <li className="done">Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
    </ol>
  </div>
);

class App extends Component {
  state = {
    userName: 'Second username'
  };
  
  setUserNameHandler = () => {
    this.setState({
      userName: 'Changing name by state'
    });
    console.log('click state: ', this.state.userName);
  };

  updateUserName = (e) => {
    this.setState({
      userName: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput change={this.updateUserName} userName={this.state.userName} />

        <UserOutput userName="First Username" />
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName="Third Username" click={this.setUserNameHandler}>Click me!</UserOutput>
        {instructions()}
      </div>
    );
  }
}

export default App;
