import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';

import { contactsSelectors, contactsOperations } from 'redux/contacts';

import s from '../Form/Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = e => {
    const { value, name } = e.currentTarget;

    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isRepeatName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isRepeatName) {
      alert(`${name} is already in contacts`);
      return [...contacts];
    }
    dispatch(
      contactsOperations.addContact({
        id: shortid.generate(),
        name,
        number,
      }),
    );
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          id={nameInputId}
          className={s.input}
        />
      </label>

      <label htmlFor={numberInputId}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          id={numberInputId}
          className={s.input}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
