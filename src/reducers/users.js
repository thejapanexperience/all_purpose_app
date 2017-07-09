const initialState = {
  users: [{'id': '001', 'Location': 'London', active : true}, {'id': '002', 'Location': 'Liverpool', active : false}, {'id': '003', 'Location': 'Newcastle', active : false}]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_USER':
      const { user } = action.payload.user;
      let Users = state.users.filter((yooser) => {
        return user.id !== yooser.id
      })
      Users.forEach(yooser => {
        yooser.active = false;
      })
      user.active = true;
      Users.push(user)
      Users.sort((a,b) => {
        if (a.id < b.id){return -1}
        if (a.id > b.id){return 1}
        return 0
      })
      return {...state, users : Users};
    default:
      return state;
  }
}
