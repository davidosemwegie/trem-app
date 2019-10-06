import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";

import * as common from '../../common/index'

class AboutScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <common.PageTitle  title="About" />
            </SafeAreaView>
        );
    }
}
export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});