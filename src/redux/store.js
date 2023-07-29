import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsSlice';
import { registrationReducer } from '../redux/user/userReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    registration: registrationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

