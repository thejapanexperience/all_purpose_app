import React, { Component } from 'react';

class Selections extends Component {



  render() {
    let { title, choices, location, addToBasket, removeFromBasket } = this.props

    let availableChoices
    let onClickFunction

    let filteredChoices = choices.filter(choice => {
      return choice.Location === location || choice.Location === 'Any'
    })

    if (filteredChoices){
      availableChoices = filteredChoices.map(choice => {
        if (choice.checked === false){
          onClickFunction = () => addToBasket(choice)
          return(
            <div key={choice.name} className="choice" onClick={onClickFunction}>
              <div className="flexLine">
                <span className="checkBox">
                  <span className='noCheck'>✔</span>
                </span>
                <span className="choiceText">{choice.name}</span>
              </div>
            </div>)
        }

        if (choice.checked === true){
          onClickFunction = () => removeFromBasket(choice)
          return(
            <div key={choice.name} className="choice" onClick={onClickFunction}>
              <div className="flexLine">
                <span className="checkBox">
                  <span className='check'>✔</span>
                </span>
                <span className="choiceText">{choice.name}</span>
              </div>
            </div>)
        }


      })
    }

    return (
      <div className="selection">
        <div className="selectionTitle">{title}</div>
        {availableChoices}
      </div>
        );
      };
    };

export default Selections;
