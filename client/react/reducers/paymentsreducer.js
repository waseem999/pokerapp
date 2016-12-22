
const LOAD_USER = 'LOAD_USER';
const DELETE_USER = 'DELETE_USER';

const initialState = { 
    chips: 0,
    user: ""
  };

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_USER: 
       return Object.assign({}, state, { chips: action.chips, user: action.user});

    case DELETE_USER:
      return Object.assign({}, state, initialState);
      break;

    default: 
       return state;
  }
}