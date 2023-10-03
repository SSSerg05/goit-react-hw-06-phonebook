import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'; // ES6'

import { getContacts, getStatusFilter } from 'redux/selectors';
import { statusFilters } from 'redux/constants';
import { Contact } from '../Contact/Contact';
import { List, ListItem, } from './ContactsList.styled';

const getVisibleContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return contacts.filter(contact => !contact.selected);
    case statusFilters.completed:
      return contacts.filter(contact => contact.selected);
    default:
      return contacts;
  }
};

export const ContactsList = () => { 
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  if (!visibleContacts.length) {
    return (
      <p>Sorry, you don't have more contacts</p>
    )
  }

  return (
    <List>
      {
        visibleContacts.map((item) =>
          <ListItem key={ item.id }>
            <Contact contact={ item } />
          </ListItem>)
      }
    </List>
  );
}

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// }