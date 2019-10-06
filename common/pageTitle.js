import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";


class PageTitle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title_style} allowFontScaling={false}>{this.props.title}</Text>
            </View>
        );
    }
}
export default PageTitle;

const styles = StyleSheet.create({
    container: {
        margin: 25
    }, 
    title_style: {
        fontFamily: "Helvetica Neue",
        fontWeight: '900',
        fontSize: 35
    }
});