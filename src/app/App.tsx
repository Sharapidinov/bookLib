import React from 'react';

import '../shared/styles/index.css';
import { AppRouter } from './router/AppRouter';

import { withProviders } from './provaiders';

const App = () => {
    return <AppRouter />;
};

export default withProviders(App);
