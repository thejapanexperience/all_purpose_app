const initialState = {
  selections: {
    Sports : [{name: 'Arsenal TV', checked: false , Location : 'London'}, {name: 'Chelsea TV', checked: false, Location : 'London' },{name: 'Liverpool TV', checked: false, Location : 'Liverpool' }],
    News : [{name: 'Sky News', checked: false, Location : 'Any' },{name: 'Sky Sports News', checked: false, Location : 'Any' }],
    Basket : []
  },
};

export default function (state = initialState, action) {
  switch (action.type) {

    case 'ADD_TO_BASKET':
      const { choice } = action.payload.choice;
      let Sports = [...state.selections.Sports]
      let News = [...state.selections.News]
      if (choice.checked === false){
        Sports.forEach(channel => {
          if (channel.name === choice.name){
            channel.checked = true;
          }
        })
        News.forEach(channel => {
          if (channel.name === choice.name){
            channel.checked = true;
          }
        })
      }
      return {...state, selections : {...state.selections, Sports : Sports, News : News,  Basket : [...state.selections.Basket, choice]}};

    case 'REMOVE_FROM_BASKET':
      const choice2 = action.payload.choice.choice;
      let Sports2 = [...state.selections.Sports];
      let News2 = [...state.selections.News];
      let Basket;
      if (choice2.checked === true){
        Sports2.forEach(channel => {
          if (channel.name === choice2.name){
            channel.checked = false;
          }
        });
        News2.forEach(channel => {
          if (channel.name === choice2.name){
            channel.checked = false;
          }
        })
        Basket = state.selections.Basket.filter((channel) => {
          return channel.name !== choice2.name
        })
      }
      return {...state, selections : {...state.selections, Sports : Sports2, News : News2,  Basket : Basket}}
      case 'SELECT_USER':
        return {selections: {
          Sports : [{name: 'Arsenal TV', checked: false , Location : 'London'}, {name: 'Chelsea TV', checked: false, Location : 'London' },{name: 'Liverpool TV', checked: false, Location : 'Liverpool' }],
          News : [{name: 'Sky News', checked: false, Location : 'Any' },{name: 'Sky Sports News', checked: false, Location : 'Any' }],
          Basket : []
        }};
    default:
      return state;
  }
}

// return [...state, action.payload];
// return objectAssign({}, state, {dateModified: action.dateModified});
