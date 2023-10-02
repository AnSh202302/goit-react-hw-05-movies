import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinkStyled = styled(NavLink)({
  fontSize: 24,
  fontWeight: 800,
  fontVariant: 'small-caps',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: '#528dcc',
  fontStyle: 'italic',
  textShadow: '1px 1px 1px #ffffff24, 2px 2px 2px rgb(49 31 31 / 15%)',
});

export default NavLinkStyled;
