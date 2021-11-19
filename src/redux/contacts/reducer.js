import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { onChangeFilter } from './actions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const filter = createReducer('', {
  [onChangeFilter]: (_, action) => action.payload,
});

export default combineReducers({ items, filter, loading });
