import React from 'react';

class UserInput extends React.Component {
  constructor(props) {
    super();
    console.log('UserInput', props);
  }

  render() {
    return (
      <div className="UserInput">
        <input type="text" onChange={this.props.change} value={this.props.userName}/>
      </div>
    )
  }
}

export default UserInput;