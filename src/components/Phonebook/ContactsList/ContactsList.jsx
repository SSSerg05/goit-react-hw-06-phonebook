import { UseSelector } from 'react-redux/es/hooks/useSelector';
import PropTypes from 'prop-types'; // ES6'

import { getContacts, getStatusFilter } from 'redux/selectors';
import { statusFilters } from 'redux/constants';
import { Contact } from '../Contact/Contact';
import { List, ListItem, } from './ContactsList.styled';


export const ContactsList = ({ contacts, statusFilter }) => { 
  
  if (!contacts.length) {
    return (
      <p>Sorry, you don't have more contacts</p>
    )
  }

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
  
  export const TaskList = () => {
    const tasks = useSelector(getTasks);
    const statusFilter = useSelector(getStatusFilter);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);
  

  return (
    <List>
      {
        contacts.map((item) =>
          <ListItem key={ item.id }>
            <Contact contact={ item } />
          </ListItem>)
      }
    </List>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}