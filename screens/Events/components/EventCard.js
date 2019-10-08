import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Linking,
    TouchableOpacity
} from "react-native";

/* 
The Event Card need the following attributes in an object: 
{
    EventId,
    EventName,
    StartTime (HH:MM AM/PM format),
    EndTime (HH:MM AM/PM fomart),
    EventAddress,
    Details,
    Date,
    Day,
    Month,
    Year,
}
*/

//import * as comp from './index'

import DateBox from './dateBox'
import CardDetails from './CardDetails'

import * as colors from '../../../constants/colors'


class EventCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={styles.dateBox}
                >
                    <Text style={styles.dateText}>{this.props.day}</Text>
                    <Text style={{fontSize: 25, color: colors.background_color, fontWeight: '900' }}>{this.props.date}</Text>
                    <Text style={styles.dateText}>{this.props.month}</Text>
                </View>
                <View
                    style={styles.detailsBox}
                >
                    <Text style={styles.eventTitleText}>{this.props.title}</Text>
                    <Text style={styles.detailsText}>{this.props.startTime} - {this.props.endTime}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(`${this.props.addressUrl}`)}>
                        <Text style={styles.addressButton}>{this.props.address}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default EventCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginHorizontal: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateBox: {
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: 'center',
        padding: 0,
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    dateText: {
        color: colors.background_color,
        //fontFamily: "Helvetica",
        fontWeight: '800'
    },
    detailsBox: {
        flex: 2,
        height: 90,
        backgroundColor: colors.background_color,
        justifyContent: 'space-evenly',
        marginLeft: 10
    },
    eventTitleText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    detailsText: {
        fontWeight: 'bold'
    },
    addressButton:{ 
        color: 'blue',
        fontWeight: 'bold'
    }
});