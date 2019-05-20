import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/reducers'
import AppNavigator from './views/AppNavigator'

const store = createStore(rootReducer)

const App = () =>{
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      )
} 

export default App;


