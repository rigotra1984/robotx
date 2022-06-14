import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import store from './store';
//https://reactdatepicker.com/#example-filter-times
//https://react-bootstrap.github.io/components/cards/
//https://getbootstrap.com/docs/5.1/content/tables/
//https://react-icons.github.io/react-icons/icons?name=fa
//https://github.com/JedWatson/react-select
//https://mhnpd.github.io/react-loader-spinner/
//https://github.com/binodswain/react-overlay-component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
