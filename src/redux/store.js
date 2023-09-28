import { createStore } from "redux";

// data
import initialContacts from "../data/contactsInitial.json";

const initialState = {
  task: [...initialContacts],
  filters: {
    status: "all",
  },
};

// Пока что используем редюсер который
// только возвращает полученное состояние
const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
