import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView
} from "react-native";

import * as common from '../../common/index'

class SermonScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <common.Header>
                    <common.PageTitle>Sermons</common.PageTitle>
                </common.Header>
            </SafeAreaView>
        );
    }
}
export default SermonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    }
});