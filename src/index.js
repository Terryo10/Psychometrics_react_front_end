import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./state/reducers/root_reducer";
import { Provider } from "react-redux";


const store = createStore(RootReducer, applyMiddleware(thunk));

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

store.subscribe(render);


render()

reportWebVitals();
