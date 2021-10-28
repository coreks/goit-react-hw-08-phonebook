import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactsItem from './ContactItem/ContactItem';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import s from '../ContactsList/ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>LOADING...</div>}
      {contacts && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
