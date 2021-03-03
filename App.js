import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import TestApp from './stopwatch';

const{width, height}= Dimensions.get('screen');
export default function Timer() {
  const[Time, setTime] = useState([
    {time:'time 1' , key:'1'},
    {time:'time 2' , key:'2'},
    {time:'time 3' , key:'3'},
    {time:'time 4' , key:'4'},
    {time:'time 5' , key:'5'}
  ])
  
  return (
    <View style={styles.container}>
      <View style={{flex:0.4, backgroundColor:'black'}}>
      <TestApp/>
      </View>
      <View style={{flex:0.1, flexDirection:'row'}}>
      <View style={{display:'flex', width:width/2.1, height:width/7, backgroundColor:'grey', alignItems:'center', justifyContent:'center', marginHorizontal:5}}>
          <Text style={{fontSize:20, color:'white'}}>RESET</Text>
        </View>
        <View style={{display:'flex', width:width/2.1, height:width/7, backgroundColor:'grey', alignItems:'center', justifyContent:'center', marginRight:5}}>
          <Text style={{fontSize:20, color:'white'}}>STOP</Text>
        </View>
      </View> 
      <View style={{flex:0.5}}>
      <ScrollView>
        {Time.map(item=>(
          <View key={item.key}style={{display:'flex', width:width, height:width/7, backgroundColor:'grey', alignItems:'center', justifyContent:'center', marginRight:5, marginVertical:1}}>
            <Text style={{fontSize:20, color:'white'}}>{item.time}</Text>
          </View>
        ))}
        </ScrollView> 
        </View>
      <StatusBar style="auto" />
      
    </View>



  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection:'column'
  },
});
