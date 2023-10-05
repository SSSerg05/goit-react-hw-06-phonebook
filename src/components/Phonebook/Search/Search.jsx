import { useSelector, useDispatch } from "react-redux"; 

import { searchContact } from 'redux/contactsSlice';
import { FieldBox, FieldLabel, FieldPosition, FieldInput } from "../Form/Form.styled"

export const Search = () => {
  const dispatch = useDispatch();
  
  const handleSearchChange = query => dispatch(searchContact(query))

  return (
    <FieldBox>
      <FieldLabel>Find contacts by name
        <FieldPosition>
          <FieldInput
            type="text"
            value={value}
            onChange={handleSearchChange}
          />
        </FieldPosition>
      </FieldLabel>
    </FieldBox>
  )
}