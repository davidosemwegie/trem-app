import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar
} from "react-native";
import * as colors from '../constants/colors'

const Header = (props) => {

    componentDidMount = () => {
        this.headerHeight = 100

        if (Platform.OS == 'android') {
            this.headerHeight = 100 + StatusBar.currentHeight
        }
    };

    const { container} = styles
    return (
        <View style={container}>
            {props.children}
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        height: 110,
        //backgroundColor: colors.background_color
    }
});