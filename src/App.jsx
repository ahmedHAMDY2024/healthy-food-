/* eslint-disable no-undef */
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/Store'
import Contaner from './component/Contaner';
function App() {
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="App">
      <Provider store={store}>
      <Contaner/>
      </Provider>
      
    </div>
  );
}

export default App;
