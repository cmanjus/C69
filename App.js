import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import TransactionScreen from './Screens/BookedTransactionsScreen';
import SearchScreen from './Screens/SearchScreen';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends Component {
  render(){
  return <AppContainer/>
  
}
}
const tabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen}
})
const AppContainer = createAppContainer(tabNavigator);