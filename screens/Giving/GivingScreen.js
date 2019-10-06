import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import * as common from '../../common/index'

class GivingScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <common.PageTitle title="Giving" />
            </SafeAreaView>
        );
    }
}
export default GivingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});