export const changeLanguage = (language) => {
  return {
    type: "@language/updated",
    payload: language,
  };
};
export const changeMailNumber = (mailNumber) => {
  return {
    type: "@mailNumber/updated",
    payload: mailNumber,
  };
};
export const changeName = (name) => {
  return {
    type: "@name/updated",
    payload: name,
  };
};
export const changeDate = (date) => {
  return {
    type: "@date/updated",
    payload: date,
  };
};
export const changeTicket = (ticket) => {
  return {
    type: "@ticket/updated",
    payload: ticket,
  };
};
export const changeInstruction = (instruction) => {
  return {
    type: "@instruction/updated",
    payload: instruction,
  };
};
export const resetValues = () => {
  return {
    type: "@allValues/reset"
  };
};
