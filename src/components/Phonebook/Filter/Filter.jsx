/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux"; 


import { statusFilters } from "redux/constants"; 
import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filtersSlice";
import { searchContact } from 'redux/contactsSlice';

import { Btn, FilterBox } from "./Filter.styled";


export const Filter = () => { 
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  // const handleSearchChange = query => dispatch(searchContact(query))


  const isSelectedStyle = css({
    backgroundColor: '#1976d2',
    color: '#fff',
  });

  const btn = Object.keys(statusFilters)
  return (
    // <FieldBox>
    //   <FieldLabel>Find contacts by name
    //     <FieldPosition>
    //       <FieldInput
    //         type="text"
    //         value={value}
    //         onChange={handleSearchChange}
    //       />
    //     </FieldPosition>
    //   </FieldLabel>

      <FilterBox>
        {
          btn.map((item, index) => {
            const isSelected = (filter === statusFilters[item]);
            
            return (<Btn 
              css={ isSelected && isSelectedStyle }
              key={`${index}-${item}`}
              selected={isSelected}
              onClick={() => handleFilterChange(statusFilters[item])}
            >
              {item}
            </Btn>)
            }
          )
        }
      </FilterBox>

    // </FieldBox>
  );
  
}

