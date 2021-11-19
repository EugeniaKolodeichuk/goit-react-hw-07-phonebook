import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import { fetchContacts, addContact, deleteContact } from './operations';
import operations from './operations';

const {
  addContactSuccess,
  addContactError,
  addContactRequest,
  onChangeFilter,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
} = actions;

/* const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
}); */

/* const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
}); */

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const filter = createReducer('', {
  [onChangeFilter]: (_, action) => action.payload,
});

export default combineReducers({ items, filter, loading });
