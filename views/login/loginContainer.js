import React from 'react';
import {StyleSheet,View, Image, TouchableHighlight,Text,TextInput,Keyboard} from 'react-native';
import Login from './login'
import SignUp from './signup'
import {Route} from 'react-router-native'



class LoginContainer extends React.Component{

    state={
        email:'',
        password:''
    }

    onChange= (name,value) =>{
        this.setState({
            [name]:value
        })   
    }

    onSubmit=()=>{
        //Keyboard.dismiss()
        this.secondTextInput.focus();
    }
    render(){console.log(this.props.toggleModal)
        return(
            <View  style={styles.container}>
                {/* {Inner Modal} */}
                <Route path='/modal/login' render={()=><Login {...this.props} />}/>
                <Route path='/modal/signup' render={()=><SignUp {...this.props} />}/>
            </View>
        )
    }
}
export default LoginContainer;
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        margin:'auto',
        backgroundColor:'rgba(0,0,0,.6)',
    },innerModal:{
        width:'80%',
        height:'60%',
        minHeight:400,
        margin:'auto',
    },modalHeader:{
        flex:2,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        padding:10,
        backgroundColor:'#ddd',
    },modalHeaderImg:{
        height:'50%',
        width:'100%',
    },modalHeaderTxt:{
        fontSize:25,
        textAlign:'center',
    },modalCloseContainer:{
        position:'absolute',
        top:-15,
        right:-15,
        width:30,
        height:30,
        backgroundColor:'rgb(80,141,179)',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },toggleLinks:{
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        alignContent:'center'
    },link:{
        width:'50%',
        padding:10
    },
    activeLink:{
        borderBottomColor: 'rgb(80,141,179)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width:'50%',
        padding:10
    },
    modalClose:{
        textAlign:'center',
        color:'#fff',
        fontSize:20 
    },loginContainer:{
        flex:2,
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:15
    },input:{
        height: 40,
        width:'100%',
        borderColor: 'gray',
        fontSize:18,
        borderRadius:5,
        borderWidth: 1,
        paddingLeft:5
    },modalFooter:{
        flex:2,
        backgroundColor:' rgb(80,141,179)',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },modalFooterTxt:{
        color:'#fff',
        fontSize:20,
    }
  });