// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store'; 
import Navigation from './src/navigation/Navigation'; 

const App = () => {
  
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;



