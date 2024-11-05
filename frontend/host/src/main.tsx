import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import 'react-singleton-context';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


