import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import * as colors from '../../../constants/colors'

class DateBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.day}</Text>
                <Text>{this.props.date}</Text>
                <Text>{this.props.month}</Text>
            </View>
        );
    }
}
export default DateBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: 50,
        // height: 50,
        backgroundColor: colors.highlight
    }
});