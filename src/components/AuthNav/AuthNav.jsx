import { NavLink } from 'react-router-dom';

import s from 'components/AuthNav/AuthNav.module.css';

function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Sign Up
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Log In
      </NavLink>
    </div>
  );
}

export default AuthNav;
