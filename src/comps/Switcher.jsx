import React, { Component} from 'react'
import {StyleSheet, Switch, View, Text} from 'react-native'  
import $ from 'jquery'
import {en,de} from "./sec"

var state = {  
  switchValue: false  
};  
function setState(s){
  state=s
}

export default class Switcher extends Component {
  state = {  
    switchValue: false  
  };  

  render() {  
      return (  
          <View>  
              <Switch  
                  value={this.state.switchValue}  
                  onValueChange ={(switchValue)=>this.setState({switchValue})}/>  
          </View>  
      );  
  }  
} 