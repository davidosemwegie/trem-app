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
                {/* <Button title="Sermon Title" onPress={() => this.props.navigation.navigate("SermonPage")}  /> */}
                <common.PageTitle title="Sermons" />
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