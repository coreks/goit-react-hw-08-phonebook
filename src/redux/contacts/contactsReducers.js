import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { contactsActions } from 'redux/contacts';

const items = createReducer([], {
  [contactsActions.getContactsSuccess]: (_state, { payload }) => payload,

  [contactsActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],

  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [contactsActions.getContactsRequest]: () => true,
  [contactsActions.getContactsSuccess]: () => false,
  [contactsActions.getContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  isLoading,
});
