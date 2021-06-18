import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';

export const AppProviders = ({ children }) => 
<Provider store={store}>
    <Router>
        <PersistGate persistor={persistor}>
            { children }
        </PersistGate>
    </Router>
</Provider>;
