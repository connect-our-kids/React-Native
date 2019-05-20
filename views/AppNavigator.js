import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './Header';
import Body from './Body';

export default class AppNavigator extends Component{
   componentDidMount(){
       
   }
   
    render(){
        return(
            <>
                <Header />
                <Body />
            </>
        )
    }
}

const styles = StyleSheet.create({
    
  });