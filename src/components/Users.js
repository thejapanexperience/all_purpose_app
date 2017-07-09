import React, { Component } from 'react';

class Users extends Component {



  render() {
    let { user } = this.props;
    console.log('user: ', user);

    return (
      <div className="user">
        <div className="userText">Placeholder</div>
      </div>
        );
      };
    };

export default Users;
