import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from 'providers/AuthProvider';
import { initStore } from 'store';

import Routes from 'Routes';
import Header from 'components/shared/Header';

const store = initStore();

const Providers = ({ children }) =>
  <Provider store={store}>
    <AuthProvider>
      {children}
    </AuthProvider>
  </Provider>

const RentalApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
  )
}
const App = () => {
  return (
    <Providers>
      <RentalApp />
    </Providers>
  );
}

export default App;
