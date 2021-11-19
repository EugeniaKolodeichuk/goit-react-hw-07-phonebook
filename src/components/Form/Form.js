import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
export default function Form() {
  const prodIdName = uuidv4();
  const prodIdNumber = uuidv4();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error(`${name} is already in your contacts`);
    } else {
      dispatch(addContact({ name, number }));
      toast.success('Сontact was added successfully!');
    }
    resetForm();
  };

  //очистка формы
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={prodIdName}>
        Name
      </label>
      <input
        className={styles.input}
        id={prodIdName}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
      />
      <br />
      <label className={styles.label} htmlFor={prodIdNumber}>
        Number
      </label>
      <input
        className={styles.input}
        id={prodIdNumber}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onAddContact: PropTypes.func,
  number: PropTypes.number,
  name: PropTypes.string,
};
