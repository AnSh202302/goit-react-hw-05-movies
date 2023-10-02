import { useState } from 'react';
import { FormStyled, InputStyled, ButtonStyled } from './Form.Styled';
const Form = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchParams = e => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      return alert('Enter value!');
    }
    onSubmit(searchValue);
    // setSearchValue('');
  };

  const updateQueryString = e => {
    setSearchValue(e.target.value.toLowerCase());
  };
  return (
    <FormStyled onSubmit={handleSearchParams}>
      <InputStyled
        type="text"
        value={searchValue}
        onChange={updateQueryString}
      ></InputStyled>
      <ButtonStyled type="submit">Search</ButtonStyled>
    </FormStyled>
  );
};

export default Form;
