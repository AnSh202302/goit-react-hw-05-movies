import { Outlet } from 'react-router-dom';
import Nav from './Nav/Nav.styled';
import NavLinkStyled from './Nav/NavLink.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </Nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
