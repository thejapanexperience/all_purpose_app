import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as SkyActions from '../actions/SkyActions';

import Selections from './Selections'
import Basket from './Basket'
import Users from './Users'

class SkyTest extends Component {

  constructor(){
    super()
    this.state = {confirmationToggle : false}
    this.confirmSelection = this.confirmSelection.bind(this)
    this.returnToSelection = this.returnToSelection.bind(this)
  }

  confirmSelection(){
    this.setState({
      confirmationToggle : true
    })
  }

  returnToSelection(){
    this.setState({
      confirmationToggle : false
    })
  }

  render() {
    const { users, selections, addToBasket, removeFromBasket, selectUser } = this.props;
    const { confirmationToggle } = this.state;

    const userButtons = users.map(user => {

      let userColor

      if (user.active){
        userColor = 'activeUser';
      } else {
        userColor = 'user';
      }

      return(
        <div key={user.id} className={userColor} onClick={() => selectUser(user)}>
          <div className="userText">User: {user.id} / Location: {user.Location}</div>
        </div>
      )
    })

    let activeUser = users.filter(user => {
      return user.active === true
    });

    let activeLocation = activeUser[0].Location;

    let basketNames = []
    selections.Basket.forEach(channel => {
      basketNames.push(channel.name)
    })

    let confirmationStr
    if (basketNames.length === 0){
      confirmationStr = `You haven't chosen anything. Click below to return.`
    } else {
      confirmationStr = `Thank you for ordering ${basketNames.join(', ')}.`
    }
    
    let confirmation
    if (confirmationToggle) {
      confirmation =
      <div id="confirmationBox" className="confirmationBox">
        <div className="confirmation">
          <div id="confirmationText" className="confirmationText">
            {confirmationStr}
          </div>
          <div className="checkoutBox" onClick={() => this.returnToSelection()}>
            <div className="checkout"><span className="checkoutText">Return?</span></div>
          </div>
        </div>
      </div>
    } else {
      confirmation = <div/>
    }

    return (
      <div className="skyBox">
        {confirmation}
        <div className="bannerBox">
          <div className="banner"/>
        </div>
        <div className="usersBox">
          {userButtons}
        </div>
        <div className="selectionBox">
          <Selections choices={selections.Sports} title={'Sports'} addToBasket={addToBasket} removeFromBasket={removeFromBasket} location={activeLocation} />
          <Selections choices={selections.News} title={'News'} addToBasket={addToBasket} removeFromBasket={removeFromBasket} location={activeLocation}/>
          <Basket choices={selections.Basket} title={'Basket'} confirm={this.confirmSelection}/>
        </div>
        <div className="bannerBox">
          <div className="banner"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  selections: state.selections.selections
});

const mapDispatchToProps = dispatch => ({
  addToBasket(choice) {
    dispatch(SkyActions.addToBasket({choice}));
  },
  removeFromBasket(choice) {
    dispatch(SkyActions.removeFromBasket({choice}));
  },
  selectUser(user) {
    dispatch(SkyActions.selectUser({user}))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SkyTest);
