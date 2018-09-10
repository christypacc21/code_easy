import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

// import { AUTHENTICATED } from './redux/reducers/constants';

import store from './redux/store';

// const token = localStorage.getItem('token');
// if (token) {
//   store.dispatch({
//     type: AUTHENTICATED,
//   });
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
