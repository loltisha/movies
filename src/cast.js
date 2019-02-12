import React, { Component } from 'react';


// eslint-disable-next-line no-unused-vars
class Cast extends Component {
  render() {
      
    return (
        <div>
     <p> <strong>Name:</strong>  {this.props.actor.name}</p>
     <p> <strong>Role:</strong> {this.props.actor.role}</p>
     </div>
    );
  }
}

export default Cast;
