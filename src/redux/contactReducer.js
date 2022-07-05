const initialState = [];
  
 export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const Filteredcontact = state.filter((contact,index) =>
          index === action.payload ? null : contact
        );
        state = Filteredcontact;
      return state;
      case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
        default:
          return state;

    }
}

export default contactReducer;