import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';

import { onChangeFilter } from '../../redux/contacts/actions';

const Filter = () => {
  const contacts = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={contacts}
          onChange={event => dispatch(onChangeFilter(event.target.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  contacts: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
