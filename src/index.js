import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </HashRouter>
    , document.getElementById('root'));
// registerServiceWorker();
