import { NavigationContainer } from '@react-navigation/native';
import { CreatNativeStackNavigator } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
const Stack = CreatNativeStackNavigator();

  return(
  
    <NavigationContainer>
    <Stack.Navigator initialRoutName='Home'>
    
    <Stack.Screen name='Home' componemt={HomeScreen}/>
    
    <Stack.Screen name='Details'component={DetailScreen}/>
    
    <Stack.Screen name='Profile'component={DetailScreen}/>
    
    </NavigationContainer>
    
    )
    
    }
  
