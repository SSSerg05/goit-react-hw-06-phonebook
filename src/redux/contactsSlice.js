import { createSlice, nanoid } from "@reduxjs/toolkit";

// data
import initialContacts from "../data/contactsInitial.json";

const contactsInitialState = initialContacts ?? [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare({name, number}) {
        return {
          payload: {
            id: nanoid(),
            name, 
            number,
            selected: false,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },

    toggleCompleted(state, action) {
      for (const contact of state) {
        if (contact.id === action.payload) {
          contact.selected = !contact.selected;
          break;
        }
      }
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { addContact, deleteContact, toggleCompleted } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;