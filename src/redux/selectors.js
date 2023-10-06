import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;
export const selectStatusFilter = state => state.filters.status;
export const selectFindQuery = state => state.findQuery;

export const selectVisibleContacts = createSelector(
  [ selectContacts, selectFindQuery],
   (contacts, query) => {
     return contacts.filter(contact => contact.name.toLowerCase()
      .includes(query.toLowerCase()))
   }
  )