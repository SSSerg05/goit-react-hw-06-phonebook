export const getContacts = state => state.contacts;

export const getStatusFilter = state => state.filters.status;

// export const selectVisibleContacts = createSelector(
//   [ selectContacts, selectFilter],
//    (contacts, filter) => {
//      return contacts.filter(contact => contact.name.toLowerCase()
//       .includes(filter.toLowerCase()))
//    }
//   )