import React from 'react';

const style = {
  cursor: 'pointer',
  padding: '4px'
};

class UserOutput extends React.Component {
  constructor(props) {
    super();
    console.log('UserOutput', props);
  }
  render() {
    const {userName} = this.props;

    const elClickMe = (this.props.children) ?
      <span style={style} onClick={this.props.click}>{this.props.children}</span> :
      '';
    console.log('Output: ', userName);

    return (
      <div className="UserOutput">
        <p>Paragraph: {userName}</p>
        <p>Some text here. </p>
        {elClickMe}
      </div>
    )
  }
}

export default UserOutput;