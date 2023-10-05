import { useDispatch } from "react-redux"; 

import { searchContact } from 'redux/contactsSlice';

// style
import { FieldBox, FieldLabel, FieldPosition, FieldInput } from "../Form/Form.styled"
import {} from "./Search.styled";

export const Search = ({value}) => {
  const dispatch = useDispatch();
  
  const handleSearchChange = (e) => {
    const query = e.currentTarget.value.trim().toLowerCase();
    return dispatch(searchContact(query))
  }

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