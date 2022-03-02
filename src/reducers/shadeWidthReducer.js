const shadeWidthReducer = (state = "604px", action) => {
  switch (action.type) {
    case "Shade Welcome":
      const { shadeWelcome } = action;
      return "604px";
    case "Shade Information":
      const { shadeInfo } = action;
      return "720px";
    case "Shade Job Opening":
      const { shadeOpening } = action;
      return "720px";
    case "Agreement":
      const { shadeAgreement } = action;
      return "720px";
    case "Interviews":
      const { shadeInterviews } = action;
      return "730px";
    default:
      return state;
  }
};

export default shadeWidthReducer;
