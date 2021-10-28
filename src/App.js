import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';

import { authOperations, authSelectors } from 'redux/auth';

import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const AsyncHomeView = lazy(() =>
  import('views/HomeView/HomeView.jsx' /* webpackChunkName: 'home-page' */),
);
const AsyncRegisterView = lazy(() =>
  import(
    'views/RegisterView/RegisterView.jsx' /* webpackChunkName: 'register-page' */
  ),
);
const AsyncLoginView = lazy(() =>
  import('views/LoginView/LoginView.jsx' /* webpackChunkName: 'login-page' */),
);
const AsyncContactsView = lazy(() =>
  import(
    'views/ContactsView/ContactsView.jsx' /* webpackChunkName: 'contacts-page' */
  ),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrent && (
      <>
        <AppBar />

        <Switch>
          <Suspense fallback={<div>LOADING...</div>}>
            <PublicRoute exact path="/">
              <AsyncHomeView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <AsyncRegisterView />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <AsyncLoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/contacts">
              <AsyncContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </>
    )
  );
}

export default App;
