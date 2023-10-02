import styled from 'styled-components';

export const FormStyled = styled('form')({
  padding: 16,
  textAlign: 'center',
});

export const InputStyled = styled('input')({
  padding: 5,
  outline: 'none',
  borderRadius: 8,
  borderColor: 'transparent',
  marginRight: 16,
  backgroundColor: 'whitesmoke',
});

export const ButtonStyled = styled('button')({
  boxShadow: 'inset 0px 0px 2px 0px #bbdaf7',
  background: 'linear-gradient(to bottom, #79bbff 5%, #378de5 100%)',
  backgroundColor: '#79bbff',
  borderRadius: 12,
  border: '1px solid #84bbf3',
  display: 'inline-block',
  cursor: 'pointer',
  color: '#ffffff',
  fontWeight: 'bold',
  padding: '7px 24px',
  textShadow: '2px 2px 0px #528ecc',
});
