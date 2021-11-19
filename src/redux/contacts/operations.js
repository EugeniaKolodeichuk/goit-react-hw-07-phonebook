import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import actions from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://61964677af46280017e7df47.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (name, number) => {
    const contact = { name, number, id: uuidv4() };
    const { data } = await axios.post('/contacts', contact);
    console.log(data);
    return data;
  },
);

/* const onAddContact = (name, number) => dispatch => {
  const contact = { name, number, id: uuidv4() };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
}; */

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    console.log(data);
    return data;
  },
);

/* const onDeleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)));
}; */

/* export default { onDeleteContact }; */

/* export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelfAPI.fetchBooks();
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
); */
