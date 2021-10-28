import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { authSelectors } from 'redux/auth';

function PublicRoute({
  children,
  redirectTo = '/',
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shoudRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shoudRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

export default PublicRoute;
