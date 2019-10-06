//This is an example of React Native Tab
import React from 'react';
//import react in our code.

import { StyleSheet, Text, View, Component, Button } from 'react-native';

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createMaterialTopTabNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import * as colors from './constants/colors'
import SafeAreaView from 'react-native-safe-area-view';

//Screens
import * as screens from './screens/index'


const SermonStack = createStackNavigator({
  Sermons: {
    screen: screens.SermonScreen,
    navigationOptions: {
      header: null
    }
  },
  SermonPage: {
    screen: screens.SermonPage
  }
})

const EventStack = createStackNavigator({
  Events: {
    screen: screens.EventScreen,
    navigationOptions: {
      header: null
    }
  }
})

const GivingStack = createStackNavigator({
  Giving: {
    screen: screens.GivingScreen,
    navigationOptions: {
      header: null
    }
  }
})

const AboutStack = createStackNavigator({
  About: {
    screen: screens.AboutScreen,
    navigationOptions: {
      header: null
    }
  }
})

const MainNavigation = createBottomTabNavigator(
  {
    Sermons: { screen: SermonStack },
    Events: { screen: EventStack },
    Giving: { screen: GivingStack },
    About: { screen: AboutStack },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.highlight,
      allowFontScaling: false,
      //showLabel: false,
      labelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
      style: {
        //height: 50,
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);



const switchNavigator = createSwitchNavigator({
  // AuthLoading: AuthLoading,
  // Auth: AuthStackNavigator,
  App: MainNavigation
})


const AppContainer = createAppContainer(switchNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    )
  }
}

// export default AppContainer