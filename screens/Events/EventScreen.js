import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import * as common from '../../common/index'

class EventScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <common.PageTitle title="Upcoming Events" />
            </SafeAreaView>
        );
    }
}
export default EventScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});