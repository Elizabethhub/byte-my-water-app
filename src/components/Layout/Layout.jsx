import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { Container } from './Layout.styled.js';

const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
