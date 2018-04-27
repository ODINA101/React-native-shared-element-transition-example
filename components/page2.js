import React, { Component } from 'react';
import {View,StyleSheet,Text,Image,ScrollView,Button} from "react-native"
import {  Transition } from 'react-navigation-fluid-transitions';



export default class Page2 extends Component {
  render() {
    return(
      <View style={{flex:1}}>
     <Transition shared={this.props.navigation.state.params.photo.uri} style={{flex:1}}>

  <Image style={{flex:1}} source={this.props.navigation.state.params.photo}/>
</Transition>


<ScrollView style={{flex:1}}>

<View style={{flex:1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>

<Button title="back" onPress={() => this.props.navigation.pop()} />
</View>
</ScrollView>

</View>
    )
  }
}
