import React, { Component } from 'react';

class Basket extends Component {



  render() {
    let { title, choices, confirm } = this.props

    let availableChoices

    if (choices){
      availableChoices = choices.map(choice => {
        return(
          <div key={choice.name} className="basketChoice">
            <div className="flexLine">
              <span className="choiceText">{choice.name}</span>
            </div>
          </div>

        )
      })
    }

    return (
      <div className="selection">
        <div className="selectionTitle">{title}</div>
        {availableChoices}
        <div className="checkoutBox" onClick={() => confirm()}>
          <div className="checkout"><span className="checkoutText">Checkout</span></div>
        </div>
      </div>
        );
      };
    };

export default Basket;
