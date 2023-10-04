import { useDispatch } from "react-redux";

import { addContact } from "redux/contactsSlice";
import { FieldBox, FieldLabel, FieldPosition, FieldInput, Button } from "./Form.styled"


export const Form = () => {
  const dispatch = useDispatch();

  // onSubmit
  const handleSubmit = e => {
    e.preventDefault();
    
    const form = e.target;

    dispatch(addContact({
      name: form.elements.name.value, 
      number: form.elements.number.value
    }));

    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldBox>
        <FieldLabel>
          Name
          <FieldPosition>
            <FieldInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FieldPosition>
        </FieldLabel>
      </FieldBox>

      <FieldBox>
        <FieldLabel>
          Number
          <FieldPosition>
            <FieldInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FieldPosition>
        </FieldLabel>
      </FieldBox>

      <Button type="submit">Save</Button>
    </form>
  )
}


