import React from 'react';
import Homepage from './src/screens/Homepage';
import store from './src/redux/store'
import { Provider } from 'react-redux'

export default function Timer() {

  return (
    <Provider store={store}>
      <Homepage/>
    </Provider>
  );
}



