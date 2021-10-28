import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'services/contactsApi';
import { contactsActions } from 'redux/contacts';

const getContacts = () => async dispatch => {
  dispatch(contactsActions.getContactsRequest());

  try {
    const contacts = await fetchContacts();
    dispatch(contactsActions.getContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.getContactsError(error));
  }
};

const addContact = contactId => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  try {
    const contact = await fetchAddContact(contactId);
    dispatch(contactsActions.addContactSuccess(contact));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await fetchDeleteContact(id);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};

const operations = { getContacts, addContact, deleteContact };

export default operations;
