import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import operations, { onAddContact } from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactList = (/* {
    contacts,
    onDeleteContact
  } */) => {
  const contacts = useSelector(getVisibleContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(operations.onDeleteContact(id));

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

/*Redux*/
/* const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
}); */

/* const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.onDeleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList); */

export default ContactList;
