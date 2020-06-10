import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Shope extends Component
{
     render()
     {
         return(
             <View style={styles.container} >
             
               <View style={styles.header_style}>
                      <Text style={styles.textStyle}> Gift </Text>
               </View>

             <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style ={{fontSize:40}}> Gift Screen </Text>
            </View>
            </View>   
            );


     }



}
const styles = StyleSheet.create({
       container: {
            flex:1,
            paddingTop:0,
            backgroundColor:'#f5fcff'
                 },
       header_style: {
                      width: '100%',
                     height: 45,
                     backgroundColor: 'blue',
                     },
       textStyle: {
                  textAlign: 'left',
                  color: 'white',
                  fontSize: 25,
                  padding: 7,
                 },

})

