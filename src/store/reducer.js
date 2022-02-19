export const universalReducer = (state = {}, action) => {
  switch (action.type) {
    case "@language/updated":
      const newLanguage = action.payload;
      return {
        ...state,
        language: newLanguage,
      };
    case "@mailNumber/updated":
      const newMailNumber = action.payload;
      return {
        ...state,
        mailNumber: newMailNumber,
      };
    case "@name/updated":
      const newName = action.payload;
      return {
        ...state,
        name: newName,
      };
    case "@date/updated":
      const newDate = action.payload;
      return {
        ...state,
        date: newDate,
      };
    case "@ticket/updated":
      const newTicket = action.payload;
      return {
        ...state,
        ticket: newTicket,
      };
    case "@instruction/updated":
      const newInstruction = action.payload;
      return {
        ...state,
        instruction: newInstruction,
      };
    case "@allValues/reset":
      return {
        ...state,
        language: "",
        mailNumber: 0,
        name: "",
        ticket: "",
        instruction: "",
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
