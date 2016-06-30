import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class P extends Component {
  render(){
    return (
      <View style={{marginTop:100}}>
        <TouchableOpacity style={{
            height:48,
            borderWidth:1,
            alignItems:'center', justifyContent:'center'}} onPress={Actions.main}>
          <Text>登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default P;
