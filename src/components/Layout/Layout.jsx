import css from './Layout.module.css';
import { ActivePage } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ActivePage className={css.headerLink} to="/">
            PhoneBook
          </ActivePage>
          <ActivePage className={css.headerLink} to="/login">
            Log in
          </ActivePage>
          <ActivePage className={css.headerLink} to="/register">
            Sign up
          </ActivePage>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
