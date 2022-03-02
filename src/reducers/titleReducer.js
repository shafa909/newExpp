const titleReducer = (state = "Exceptionly", action) => {
  switch (action.type) {
    case "signInTitle":
      const { title } = action;
      return title;
    case "signUpTitle":
      const { titleTwo } = action;
      return titleTwo;
    default:
      return state;
  }
};

export default titleReducer;
