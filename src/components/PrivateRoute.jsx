import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { authSelectors } from 'redux/auth';

<Redirect to="/login" />;

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

export default PrivateRoute;
