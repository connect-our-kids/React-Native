import React from 'react';

//Store Data
import {Provider,connect} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';//Reducer

//Beautify

import { SplashScreen } from 'expo';
import AppNavigator from './views/AppNavigator';//Component
import { NativeRouter} from "react-router-native";



const store = createStore(rootReducer,applyMiddleware(thunk))

class App extends React.Component{
  
  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  render(){
    return (
        
          <Provider store={store}>
              <NativeRouter>
                <AppNavigator/>
              </NativeRouter>
          </Provider>
    
    )
  }
} 



export default App;


