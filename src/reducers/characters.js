const initialState = {
  loading: true,
  results: []
}

function characters (state = initialState, action) {
  switch (action.type) {
    case 'LOADING': 
      return {
        ...state,
        loading: true
      }
    case 'RECEIVE_CHARACTERS': 
      return {
        ...state,
        loading: false,
        results: [...state.results, ...action.characters]
      }

    default:
      return state
  }
}

export default characters
