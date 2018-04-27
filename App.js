/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView
} from 'react-native';
import axios from "axios"
import Home from "./components/home"
import Page2 from "./components/page2"


import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

const Navigator = FluidNavigator({
  screen1: {screen: Home},
  screen2: {screen: Page2}
});
export default class App extends Component {

  render() {
    return (
      <View style={{flex:1}}>

    <Navigator />

      </View>
    );
  }
}

const styles = StyleSheet.create({
});
