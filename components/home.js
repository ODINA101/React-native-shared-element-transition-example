import React, { Component } from 'react';
import {View,
  StyleSheet,
  Text,Button,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity

  } from "react-native"
import { Transition } from 'react-navigation-fluid-transitions';
import List from "./list"
import GridView from 'react-native-super-grid';
export default class Home extends Component {


constructor() {
  super()

  this.state = {
  users:List
  }




}

  render() {
    return(
      <View>
<ScrollView>

    <GridView
      style={{padding:0}}
      itemDimension={130}
      items={this.state.users}
      renderItem={(item,i) => (
  <Transition shared={item.uri}>
        <TouchableOpacity
        onPress={()=> {this.props.navigation.navigate("screen2",{photo:item});}}
          >
        <Image source={item} style={{width:(Dimensions.get("window").width/2)-20,height:120}}/>
    </TouchableOpacity>

  </Transition>

        )}
    />




</ScrollView>



      </View>
    )
  }
}
