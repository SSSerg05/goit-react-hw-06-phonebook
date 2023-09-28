import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

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

// Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);


