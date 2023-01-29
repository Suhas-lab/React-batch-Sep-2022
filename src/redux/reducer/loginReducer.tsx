const initialState: any = {
    isLogedIn: true
  }

// what is reducer => Reducer is container which accept action by user and update state according to particular action
export const loginReducer = (state = initialState, action: any) => {
    // debugger;
    switch (action.type) {
      case 'LOGIN': {
        return {
          ...state,
          isLogedIn: action.payload
        }
      }
      case 'LOGOUT': {
        return {
          ...state,
          isLogedIn: action.isLogedIn
        }
      }
      default:
        return state
    }
  }