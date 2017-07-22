import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import UserCard from './UserCard';

class AllPurposeApp extends Component {

  constructor(){
    super()
    this.state = {
      users : [],
      initialized : false
    }
    this.getData = this.getData.bind(this)
  }

  getData(){
    axios.get('/api/newuser')
    .then( response => {
      console.log('response: ', response.data.results[0])
      let newUser = response.data.results[0];
      let users = this.state.users
      users.unshift(newUser)
      this.setState({
        users,
        initialized : true
      })
    })
    .catch( error => {
      console.log('error: ', error)
    })
  }

  render() {

    const { users, initialized } = this.state;

    let userCard = <div> NoData </div>;

    let show = false;

    if(!initialized){
      this.getData()
    }

    if(users.length){
      userCard = users.map(user => {
        console.log('user: ', user)
        return (
          <UserCard key={user.login.md5} user={user} show={show}/>
            )
          });
        }

          return (
          <div className="appBox">

            <div className="buttonBox">
              <div className="myButton1" onClick={() => this.getData()}>
                <div className="myButton1Text">Get Data</div>
              </div>
            </div>
            <div className="userCardBox">

              {userCard}

            </div>

          </div>
            );
            }
            }

            const mapStateToProps = state => ({

            });

            const mapDispatchToProps = dispatch => ({

            });

            export default connect(mapStateToProps, mapDispatchToProps)(AllPurposeApp);
