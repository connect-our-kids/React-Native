import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity, TextInput,Image, FlatList,Keyboard} from 'react-native';
import {search,clearSearch} from '../../store/actions';
import {connect} from 'react-redux';




class Search extends React.Component{
    state={
        filterBy:[
            {name:'Name', placeHolder:'First and Last, middle optional',query:'',qued:'' },
            {name:'Email', placeHolder:'Email Address',query:'',qued:''},
            {name:'Address',placeHolder:'Mailing Address',query:'',qued:''},
            {name:'Phone', placeHolder:'Phone any format, no letters',query:'',qued:''},
            {name:'URL', placeHolder:'Social profile link or any URL',query:'',qued:''}
        ],
        activeFilter: 0,
        text:'',
        error:null,
        placeHolder:'',
    }
    
    componentDidMount(){
        this.setState({ 
            activeFilter:this.props.activeFilter,  
            placeHolder:this.state.filterBy[this.state.activeFilter].placeHolder
        })
    }

    clearSearch= () =>{
        this.setState({
            error:null
        })
        this.props.clearSearch
    }

    onChange = text =>{
        this.setState({
            text:text
        })   
    }
    
    setActive = i =>{
        this.setState({
            activeFilter:i,
            placeHolder:this.state.filterBy[i].placeHolder,
        })
    }

    //Validate First
    search = () =>{
        this.setState({error:null})

        let error = '';
        
        //Validation:CONSIDER -> ADDING TYPE TO VALIDATION FOR EXTENDED FUNCTIONALITY -> regExpression Validation
        error = this.state.text.length >= 30 ? 'Max Characters Exceeded: No more than 30chars please':error;//MAX 30
        error = this.state.text.length < 4 ? 'Min Characters not Met: Expecting at least 5 chars':error;//MIN 5
        
        //Keyboard remains if error state persists 
        {!error && Keyboard.dismiss()}
        
        //Passed Validation
        !error ? this.props.search() : this.setState({error:error});
    };


    render(){
        console.log(this.props.clearSearch)
        return(  
            <View style={styles.container} >
                
                {/* {SEARCH FILTERS} */}
                <Text style={styles.h1}>Search By:</Text>
                <View style={styles.filterLinks}>
                    {this.state.filterBy.map((filter,i) =>
                        <TouchableOpacity  onPress={() => this.setActive(i)} key={i}>
                            <Text style={this.state.activeFilter === i ? styles.Active:styles.inActive}>{filter.name}</Text>
                        </TouchableOpacity>)
                    }
                </View>

                {/* {INPUT TEXT (MIN CHAR:5,MAX CHAR:30)} */}
                <View>
                    {/* {ISSUE: IF && ERROR STATE EXIST KEYBOARD HIDES::CONSIDER FIXING:RJ } */}
                    <TextInput
                        style={{height: 40, borderColor: 'gray',fontSize:18, borderRadius:5,marginTop:20,borderWidth: 1,paddingLeft:5}}
                        onChangeText={(text)=>this.setState({text})}
                        value={this.state.text}
                        onSubmitEditing = {()=>this.search()}
                        placeholder = {this.state.placeHolder}
                    />
                </View>

                {/* {SEARCH BUTTONS} */}
                <View style={{flexDirection:'row'}}>
                    
                    {/* {SEARCH} */}
                    <TouchableOpacity  onPress={this.search}>
                                <Text style={styles.searchButton} >Search</Text>
                    </TouchableOpacity>
                    
                    {/* {Clear Search} */}
                    <TouchableOpacity  onPress={this.clearSearch}>
                                <Text style={styles.searchButton} >Clear Search</Text>
                    </TouchableOpacity>

                </View>

                {/* {RESULTS} */}
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    {/* {Default} */}
                    {!this.state.error && !this.props.searchResults.length > 0 && !this.props.fetching &&
                        <>
                            <Text style={{fontSize:35,color:'rgb(80,141,179)',textAlign:'left'}}>People Search</Text>
                            <Text style={{fontSize:20,color:'#d3d3d3',lineHeight:35}}>
                                Social workers use this tool to find contact information for extended families and supporters of foster kids. This search uses public information from over 300 sources and covers over 3 billion people.
                            </Text>
                        </>
                    }

                     {/* {ERROR} */}
                    {this.state.error &&                                 
                         <Text style={{color:'red',fontSize:18}}>{this.state.error}</Text>
                    }

                    {/* {SUCCESS} */}
                    {!this.props.fetching && this.props.searchResults &&                                     
                       
                       <FlatList 
                            data={this.props.searchResults}
                            renderItem={({ item }) => (
                                <Text style={{fontSize:40}}>{item.name}</Text>
                            )}
                            keyExtractor={item => item.name}
                        />
                    }

                    {/* {LOADING} */}
                    {this.props.fetching &&                                                                  
                        <Image source={require('../../assets/Icons/loading.gif')} />
                    }
                </View>
            </View>
        )
    }
}


mapStateToProps = state =>{
    return{
        ...state.search
    }
}

export default connect(mapStateToProps,{search,clearSearch})(Search);


//styles---There has got to be a better way!

const pFontSize = 18;
const btnPadding = 10;
const h1 = 18;

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
    },Active:{
        color:'#000',
        fontSize:pFontSize,
        fontWeight:'bold',
        paddingRight:btnPadding
    },inActive:{
        fontSize:pFontSize,
        paddingRight:btnPadding,
        color: 'rgb(80,141,179)'
    },filterLinks:{
        flexDirection:'row',
        marginTop:10,
        marginTop:10
    },h1:{
        fontSize:h1,
        paddingRight:btnPadding,
    },searchButton:{
        marginTop:20,
        marginRight:20,
        marginBottom:20,
        textAlign:'center',
        padding:10,
        backgroundColor:'rgb(80,141,179)',
        color:'#fff'
    }
})