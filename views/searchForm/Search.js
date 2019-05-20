import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity, TextInput} from 'react-native';


class Search extends React.Component{
    state={
        filterBy:[
            {name:'Name', placeHolder:'First and Last, middle optional'},
            {name:'Email', placeHolder:'Email Address'},
            {name:'Address',placeHolder:'Mailing Address'},
            {name:'Phone', placeHolder:'Phone any format, no letters'},
            {name:'URL', placeHolder:'Social profile link or any URL'}
        ],
        isActive: 0,
        text:'',
        placeHolder:''
    }
    
    componentDidMount(){
        this.setState({
            placeHolder:this.state.filterBy[this.state.isActive].placeHolder
        })
    }

    onChange = text =>{
        this.setState({
            text:text
        })
        
    }
    
    setActive = i =>{
        this.setState({
            isActive:i,
            placeHolder:this.state.filterBy[i].placeHolder,
        })
    }

    render(){
        return(
            <View style={styles.container} >
                <Text>Search By:</Text>
                <View style={styles.flexRow}>
                    {this.state.filterBy.map((filter,i) =>
                        <TouchableOpacity  id={i} onPress={() => this.setActive(i)} key={i}>
                            <Text style={this.state.isActive === i ? styles.Active:styles.inActive}>{filter.name}</Text>
                        </TouchableOpacity>)}
                </View>
                <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text)=>this.setState({text})}
                    value={this.state.text}
                    onSubmitEditing = {() => alert(this.state.text)}
                    placeholder = {this.state.placeHolder}
                />
                </View>
            </View>
        )
    }
}

export default Search;

const pFontSize = 18;
const btnPadding = 10;

const styles = StyleSheet.create({
    container:{
        padding:20,
        marginTop:50
    },Active:{
        color:'#000',
        fontSize:pFontSize,
        fontWeight:'bold',
        paddingRight:btnPadding
    },inActive:{
        fontSize:pFontSize,
        paddingRight:btnPadding
    },flexRow:{
        flexDirection:'row'
    }
})