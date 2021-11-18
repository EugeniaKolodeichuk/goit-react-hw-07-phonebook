import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactError = createAction('contact/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contact/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contact/deleteContactError');

/* const onDeleteContact = createAction('contacts/delete'); */

const onChangeFilter = createAction('contacts/changeFilter');

// eslint-disable-next-line
export default {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
  /* onAddContact, */
  /* onDeleteContact */
  onChangeFilter,
};

/* export const onAddContact = createAsyncThunk(
  'contacts/onAddContacts',
  async contactData => {
    const contact = { contactData };
    const { data } = await axios.post('/contacts', contact);
    console.log(data);
    return data;
  },
); */

/* const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
}); */
