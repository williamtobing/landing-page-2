const navButtonReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW":
      return !state;
    case "HIDE":
      return false;
    default:
      return state;
  }
};

export default navButtonReducer;
