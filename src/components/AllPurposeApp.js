import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import UserCard from './UserCard';

class AllPurposeApp extends Component {

  constructor(){
    super()
    this.state = {
      users : [],
      initialized : false,
      show : false,
    }
    this.getData1 = this.getData1.bind(this)
    this.getData2 = this.getData2.bind(this)
    this.getData3 = this.getData3.bind(this)
  }

  getData1(){
    this.setState({
      show: false,
    });
    setTimeout(() => {
      this.getData2();
    },200);
  }

  getData2(){
    axios.get('/api/newuser')
    .then( response => {
      let newUser = response.data.results[0];
      let users = this.state.users
      users.unshift(newUser)
      this.setState({
        users,
        initialized : true,
      })
      this.getData3()
    })
    .catch( error => {
      console.log('error: ', error)
    })
  }

  getData3(){
    setTimeout(() => {
      this.setState({
        show:true
      })
    }, 200)
  }

  render() {

    const { users, initialized, show } = this.state;

    let userCard = <div> NoData </div>;

    if(!initialized){
      this.getData2()
    }

    if(users.length){
      userCard = users.map((user, i) => {
        return (
          <UserCard key={user.login.md5} user={user} show={show} index={i}/>
            )
          });
        }

          return (
          <div className="appBox">

            <div className="buttonBox">
              <div className="myButton1" onClick={() => this.getData1()}>
                <div className="myButton1Text">Get New User</div>
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
