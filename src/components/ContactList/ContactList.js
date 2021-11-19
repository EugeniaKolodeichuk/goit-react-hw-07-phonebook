import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { getVisibleContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { deleteContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.success('Contact was deleted successfully');
  };

  return (
    <div className={styles.section}>
      <ul className={styles.list}>
        {contacts.map(
          ({ id, name, number }) =>
            typeof number === 'string' && (
              <li className={styles.item} key={id}>
                <p className={styles.name}> {name}:</p>
                <p className={styles.number}>{number}</p>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.any.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
