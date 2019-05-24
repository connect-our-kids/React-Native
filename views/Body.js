import React from 'react';
import Search from './searchForm/Search';
import {connect} from 'react-redux';
import {toggleModal} from '../store/actions';

import {Route} from "react-router-native";
import Modals from './Modal'


const Body = props =>{
        return(
        <>
            <Route path='/' render={()=><Search {...props}/>} />

            <Route path='/modal' render={()=><Modals  {...props} />} />
           
        </>
    )
    
}
const mapStateToProps = state =>{
    return{
        ...state.search
    }
}
export default connect(mapStateToProps,{toggleModal})(Body);

