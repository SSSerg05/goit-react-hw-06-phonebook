import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types'; // ES6'

import { deleteContact, toggleCompleted, } from 'redux/contactsSlice';
import { Name, Button, } from './Contact.styled';

export const Contact = ({contact}) => {
  const dispatch = useDispatch();

  const {id, name, number, selected} = contact;
  const handleDelete = () => dispatch(deleteContact(id));
  const handleToggle = () => dispatch(toggleCompleted(id));
  
  return (
    <div>
      <input 
        type="text"
        checked={ selected }
        onChange={ handleToggle } 
      />
      <Name>{ name + ': ' + number }</Name>
      <Button onClick={ handleDelete }>
        <MdClose size={24} />
      </Button>
      
    </div>
  )
}

Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
}