import React from 'react';
import {StyleSheet,View, Image, TextInput,Text,TouchableHighlight} from 'react-native';
import {Link} from 'react-router-native'

export default class SignUp extends React.Component{
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
    render(){
        return(
            <View style={styles.innerModal}>
                <View style={styles.modalHeader}>
                    <Image style={styles.modalHeaderImg} source={require('../../assets/logo.png')} />
                    <Text style={styles.modalHeaderTxt}>Sign Up Now</Text>
                    <Link to='/' style={styles.modalCloseContainer} onPress={this.props.toggleModal}>
                        <TouchableHighlight >
                            <Text style={styles.modalClose}>X</Text>
                        </TouchableHighlight>
                    </Link>
                </View>
                <View style={styles.toggleLinks} >
                    <Link to='/modal/login' style={styles.link} >
                        <TouchableHighlight >
                            <Text style={{textAlign:'center'}}>Login</Text>
                        </TouchableHighlight >
                    </Link>
                    <Link to='/modal/signup' style={styles.activeLink} >
                        <TouchableHighlight >
                            <Text style={{textAlign:'center'}}>Sign Up</Text>
                        </TouchableHighlight>
                    </Link>
                    
                </View>
                <View style={styles.loginContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={()=>this.onChange('email')}
                        onSubmitEditing = {() => { this.onSubmit }}
                        placeholder = 'Email'
                        value={this.state.email}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={()=>this.onChange('password')}
                        ref={(input) => { this.secondTextInput = input; }}
                        onSubmitEditing = {()=>alert('Submit')}
                        placeholder = 'Password'
                        value={this.state.password}
                    />
                </View>
                <View style={styles.modalFooter}>
                    <TouchableHighlight>
                        <Text style={styles.modalFooterTxt}>Sign Up</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    innerModal:{
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

})