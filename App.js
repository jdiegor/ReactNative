/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, FlatList} from 'react-native';
import {StackN} from 'react-navigation';
import MenuTab from './src/components/MenuTab';

type Props = {};
export default class App extends Component<Props> {
 

  render() {
  
    let diario = 'Super Dieo';
    return (
        <MenuTab />
    );
  
  }
}