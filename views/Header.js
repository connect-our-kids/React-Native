import React, {Component} from 'react';
import { StyleSheet, View, Image,Text,Button, TouchableOpacity} from 'react-native';


export default class Header extends Component{
    state = {
        isLoggedin:false,
        username:'roman'
    }
    
   componentDidMount(){
      
   }


   onPressLearnMore = e =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            isLoggedin:true
        })
   }
   
    render(){
        return(
                <View style={styles.header}>
                    <Image  style={styles.img}  source={require('../assets/logo.png')}/>
                   
                    <View style={styles.login}>
                        {//Needs To Log In
                        !this.state.isLoggedin && 
                        <>
                            <TouchableOpacity onPress={() => alert(this.state.isLoggedin)} >
                                <Text>Log In </Text>
                            </TouchableOpacity>
                            <Text>or </Text>
                            <TouchableOpacity onPress={() => alert(this.state.isLoggedin)} >
                                <Text>Log In</Text>
                            </TouchableOpacity>
                        </>}
                        {//Is Logged In
                        this.state.isLoggedin && 
                        <>
                            <Text>Hello </Text>
                            <Button title={this.state.username} style={styles.plink} />
                        </>}
                    </View>
                </View>
                
        )
    }
}

const styles = StyleSheet.create({
    header: {
      width:'100%',
      height:'10%',
      marginTop:25,
      
      justifyContent:'space-between',
      alignItems:'flex-end'
      
    },img:{
        padding:0,
        width:'100%',
        height:'100%'
    },login:{
        marginTop:-10,
        marginRight:28,
        flexDirection:'row'
    },plink:{
        color:'#508db3',
    }
  });