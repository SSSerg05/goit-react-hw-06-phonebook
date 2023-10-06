import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { findQueryReducer } from "./findQuerySlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    findQuery: findQueryReducer,
  },
});


