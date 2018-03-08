import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import configureStore, {history} from './store/configure-store';
import {AppContainer} from 'react-hot-loader';
import Root from './components/root';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <Root store={store} history={history}/>
    </AppContainer>,
    document.getElementById('root')
);

registerServiceWorker();
