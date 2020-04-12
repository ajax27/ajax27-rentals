
// PURE FUNCTION, does not mutate args, no API calls, no Route Transitions
// No Side Effects and produces the result and nothing else

const rentals = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RENTALS':
      return action.rentals;
    case 'CREATE_RENTAL':
      return [...state, action.rental];
    default:
      return state;
  }
}

export default rentals;
