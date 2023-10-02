import { Outlet } from 'react-router-dom';
import Nav from './Nav/Nav.styled';
import NavLinkStyled from './Nav/NavLink.styled';
import { Suspense } from 'react';

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
        <Suspense>
          {' '}
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
