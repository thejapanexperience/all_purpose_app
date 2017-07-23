import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserCard extends Component {

  render() {

    let { user, show, index } = this.props;

    let visibility = "userCard"

    show ? visibility = "userCardShow" : visibility = "userCard"

    if (show && index === 0){
      visibility = "userCardShow0"
    }

    let userName = `${user.name.first} ${user.name.last}`;

    return (

        <div className={visibility}>

          <div className="editButtonBox">
            <div className="editButton">
              <div className="editButtonText">Edit</div>
            </div>
          </div>

          <div className="deleteButtonBox">
            <div className="deleteButton">
              <div className="deleteButtonText">Del</div>
            </div>
          </div>

          <div className="nameImageBox">

            <div className="userCardImageBox">
              <img className="userCardImage" src={user.picture.large} alt=""/>
            </div>

            <div className="userNameBox">
              <div className="userName">
                {userName}
              </div>
            </div>

          </div>

          <div className="userDetailsBox">
            <div className="userDetails">
              {user.gender} | {user.cell}<br/>
              {user.email} <br/>
              City: {user.location.city} <br/>
              Street: {user.location.street} <br/>
              Nationality: {user.nat} <br/>
              Date: {user.registered} <br/>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
