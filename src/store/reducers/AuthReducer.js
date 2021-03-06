const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.error('login errorr');
      return {
        ...state, authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login success');
      return {
        ...state, authError: null
      }
    case "SIGNOUT_SUCCESS":
      console.log('SIgn Out Success');
      return state;
    case "SIGNUP_SUCCESS":
      console.log('sign up success');
      return {
        ...state, authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('SIgn up error');
      return {
        ...state, authError: action.err.message
      }
    default:
      return state;
  }

}

export default authReducer;