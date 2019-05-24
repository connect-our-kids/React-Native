import React, {Component} from 'react';
import {View} from 'react-native';
import {SplashScreen} from 'expo';

//Store
import {connect} from 'react-redux'

//Actions
import {toggleModal} from '../store/actions'

//Components
import Header from './Header';
import Body from './Body';

//Router
import { Redirect,withRouter} from "react-router-native";



class AppNavigator extends Component{

    render(){   
          
        return(
         
                <View style={{flex:1,backgroundColor:'#fff'}}>
                    <Header toggleModal={this.props.toggleModal} onLoad={SplashScreen.hide()}/>
                    <Body/>  
                </View> 
          
        )
    }
}

const mapStateToProps = state =>{

    return{
        ...state.search,
    }
}


export default connect(mapStateToProps,{toggleModal})(AppNavigator)
