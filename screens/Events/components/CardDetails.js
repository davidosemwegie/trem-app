import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CardDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                <Text>{this.props.time}</Text>
                <Text>{this.props.address}</Text>
            </View>
        );
    }
}
export default CardDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'salmon'
    }
});