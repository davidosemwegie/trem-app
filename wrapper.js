// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, SafeAreaView } from 'react-native';
//import all the components we are going to use.

import { withNavigation } from 'react-navigation';
 
class Wrapper extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "red"}}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}

export default withNavigation(Wrapper);