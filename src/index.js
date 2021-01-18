import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import globalReducer from './reducers/advertise/global-reducer';

let advertiseStore = createStore(globalReducer,
  compose(applyMiddleware(ReduxThunk),
    /* Redux DevTools for debugging application's state changes */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
/* ReactDOM. render() controls the contents of the container node you pass in. 
   Any existing DOM elements inside are replaced when first called */
ReactDOM.render(
  /* React StrictMode is a feature added in version 16.3 and 
  aimed to help us in finding potential problems in an application. 
  If you see warnings in StrictMode ,
   you will likely encounter bugs when trying to use Concurrent React */
  <React.StrictMode>
    {/* The <Provider /> makes the Redux store available 
to any nested components that have been wrapped
 in the connect() function */}
    <Provider store={advertiseStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
