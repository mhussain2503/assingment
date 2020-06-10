import React, {Component} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    FlatList,
    Image,
    AppRegistry,
    TouchableOpacity,
    ToastAndroid,
    Header    
} from 'react-native';


import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import Profile from './Profile';
import Cart from './Cart';
import Shope from './Shope';

const numColumns = 3

 class Home extends Component
{   
    constructor() {
        super()
        this.state = {
            dataSource : []
          
        }
    }

   

    renderItem=({ item })=> {
     return (
                 
        <TouchableOpacity style= {{ flex: 1, marginBottom: 3}}
            onPress ={() => ToastAndroid.show(item.title, ToastAndroid.SHORT)}>
             <Image  style={{ width: 110, height: 150, margin: 5, borderTopLeftRadius:15, borderTopRightRadius:15, padding: 10, backgroundColor:'black'}}
               source={{ uri: item.image}}/>
            <View style= {{ flex:1, justifyContent: 'center', marginLeft:5}}>
                <Text style= {{ fontsize: 15, color:'black',marginBottom: 5, marginRight:5,justifyContent: 'center',padding: 5}}>
                   {item.title}
                </Text>
                <Text style= {{ fontsize: 10, color:'red',marginBottom: 5, textAlign: 'center', padding: 5 }}>
                    {item.price }
                </Text>
              </View>
        </TouchableOpacity>
     )
    }

    renderSeparator= () => {
        return (
            <View
               style ={{ height:.5, width: '100%', backgroundColor:'black',marginBottom: 5}}>
            </View>
        )
    }


    componentDidMount(){
        const url = 'https://api.androidhive.info/json/movies_2017.json'

        fetch(url)
        .then((response)=> response.json())
        .then((responseJson) =>{
            this.setState({
                dataSource: responseJson        
            })

        })
        .catch((error) => {
            console.log(error)
        })
    }
     

     render()
     {
         return(    
            <View style={styles.container} >
             
               <View style={styles.header_style}>
                      <Text style={styles.textStyle}> Shop </Text>
                </View>
               
                 <Text style= {{ fontsize: 18, color:'black',marginBottom: 15, marginTop: 15, padding: 7,}}>
                          New Release Films
                 </Text>
               <FlatList
                   data ={this.state.dataSource}
                   renderItem={this.renderItem}
                   keyExtractor={(item, index) => index.toString()}
                   ItemSeparatorComponent={this.renderSeparator}
                   numColumns = {numColumns}             
                />
             </View>
         );
     }
}

const TabNavigator = createMaterialBottomTabNavigator (
      {
              Home :{screen:Home,
                navigationOptions:{
                    tabBarLabel: 'Store',
                    activeColor:'#000000',
                    inactiveColor:'#ff0000',
                    barStyle: {backgroundColor:'red'},
                    tabBarIcon:()=>(
                        <View>
                           <Icon name={'store'} size={30} style={ {color:'#ff0000' }} />
                        </View>
                    )
                }
              },
             
              Shope :{screen:Shope,
                navigationOptions:{
                    tabBarLabel: 'Gift',
                    activeColor:'#ff0000',
                    inactiveColor:'#000000',
                    barStyle: {backgroundColor:'#67baf6'},
                    tabBarIcon:() => (
                        <View>
                           <Icon name={'home'} size={25} style ={{color:'#ff0000'}}/>
                        </View>
                    )
                }
              },
             
               Cart :{screen:Cart,
                  navigationOptions:{
                    tabBarLabel: 'Cart',
                    activeColor:'#000000',
                    inactiveColor:'#000000',
                    barStyle: {backgroundColor:'red'},
                    tabBarIcon:() => (
                        <View>
                           <Icon name={'add-shopping-cart'} size={25} style ={{color:'#ff0000'}}/>
                        </View>
                    )
                  }
               },
                Profile :{screen:Profile,
                navigationOptions:{
                    tabBarLabel: 'Profile',
                    activeColor:'#ff0000',
                    inactiveColor:'#000000',
                    barStyle: {backgroundColor:'blue'},
                    tabBarIcon:() => (
                        <View>
                           <Icon name={'person'} size={25} style ={{color:'#ff0000'}}/>
                        </View>
                    )
                }
              },

      }
);

const styles = StyleSheet.create({
       container: {
            flex:1,
            paddingTop:0,
            backgroundColor:'#f5fcff'
                 },
       header_style: {
                     width: '100%',
                     height: 60,
                     backgroundColor: 'blue',
                    
                     },
       textStyle: {
                  textAlign: 'left',
                  color: 'white',
                  fontSize: 25,
                  padding: 7,
                   justifyContent: 'center',
                   textAlign: 'center'
                 },

})

export default createAppContainer(TabNavigator);
