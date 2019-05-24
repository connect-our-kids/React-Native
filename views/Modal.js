import React from 'react';
import {Link, Redirect} from 'react-router-native'
import {Modal} from 'react-native'
import LoginContainer from './login/loginContainer'

const Modals = props =>{console.log(props)
    let visible = ()=>{
        
        props.toggleModal();
    }
    return( 
        <Modal animationType="fade" transparent={true} visible={props.modalVisible} onRequestClose={()=> console.log('Back Does not Work To Close Modal see:MODAL.js')}>
            <LoginContainer toggleModal={props.toggleModal} />
        </Modal>
    )
}

export default Modals;