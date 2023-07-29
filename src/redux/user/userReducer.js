const initialState = {
    registeredUser: null,
  };
  
  export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          registeredUser: action.payload,
        };
      default:
        return state;
    }
  };
  