import React, {Component} from 'react';
import {View} from 'react-native';

export default class Results extends Component{
    
    render(){
        console.log(this.props)
        results(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

                {/* {ERROR} */}
                {this.props.error &&                                 
                    <Text style={{color:'red',fontSize:18}}>{this.props.error}</Text>
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
        )
    }
}