import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserCard extends Component {

  constructor(){
    super()
    this.state = {
      showIt : false
    }
    this.init = this.init.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      showIt : false
    })
  }


  init(){
    console.log('in init()');
    this.setState({
      showIt : true
    })
  }


  render() {

    let { user, show } = this.props;
    let { showIt } = this.state;

    let visibility

    if(!show && !showIt){
      setTimeout(() => {
        this.init()
      }, 1000)
    }

    showIt ? visibility = "userCardShow" : visibility = "userCard"

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
              Sex: {user.gender} <br/>
              Phone: {user.cell} <br/>
              Email: {user.email} <br/>
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
