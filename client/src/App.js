import React, { Component } from 'react';
import User from './component/User';
import Users from './component/Users';

class App extends Component {
  state = {
    selectedUser: null,
  }

  selectUser = (user) => {
    this.setState({ selectedUser: user})
  }

  render() {
    return (
    <div className="container mx-auto px-4">
      {this.state.selectUser ?
      <User user={this.state.selectedUser} selectUser={this.selectUser} />
      :
      <Users selectUser={this.selectUser} />
    }
    </div>
    )};
  }

export default App;
