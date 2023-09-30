import PropTypes from 'prop-types'; // ES6'
import { List, ListItem, ItemText, ItemButton } from './ContactsList.styled';
import { BiTrash, BiXCircle, } from 'react-icons/bi';

export const ContactsList = ({ contacts, onDelete }) => { 
  
  if (!contacts.length) {
    return (
      <p>Sorry, you don't have more contacts</p>
    )
  }


  return (
    <List>
      {
        contacts.map(({ id, name, number }) =>
          <ListItem key={id}>
            <ItemText>{name + ': ' + number}</ItemText>
            <BiXCircle onClick={() => onDelete(id)} />
          </ListItem>)
      }
    </List>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}