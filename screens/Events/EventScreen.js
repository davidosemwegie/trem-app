import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import * as common from '../../common/index'
import * as colors from '../../constants/colors'
import * as comp from './components/index'


const DATA = [
    {
        eventId: "1",
        day: "SUN",
        date: "29",
        month: "SEP",
        title: "Sunday Service",
        startTime: "9:00 AM",
        endTime: "11:00 AM",
        address: "10307 Eamon Rd NW",
        addressUrl: "https://goo.gl/maps/ua7NuUKhTFsQDWGh7"
    },
    {
        eventId: "2",
        day: "WED",
        date: "2",
        month: "OCT",
        title: "Bible Study",
        startTime: "6:00 PM",
        endTime: "7:30 PM",
        address: "10307 Eamon Rd NW",
        addressUrl: "https://goo.gl/maps/ua7NuUKhTFsQDWGh7"
    },
    {
        eventId: "3",
        day: "SUN",
        date: "6",
        month: "OCT",
        title: "Sunday Service",
        startTime: "9:00 AM",
        endTime: "11:00 AM",
        address: "10307 Eamon Rd NW",
        addressUrl: "https://goo.gl/maps/ua7NuUKhTFsQDWGh7"
    },
    {
        eventId: "4",
        day: "WED",
        date: "9",
        month: "OCT",
        title: "Bible Study",
        startTime: "6:00 PM",
        endTime: "7:30 PM",
        address: "10307 Eamon Rd NW",
        addressUrl: "https://goo.gl/maps/ua7NuUKhTFsQDWGh7"
    },
    {
        eventId: "5",
        day: "SUN",
        date: "29",
        month: "SEP",
        title: "Sunday Service",
        startTime: "9:00 AM",
        endTime: "11:00 AM",
        address: "10307 Eamon Rd NW",
        addressUrl: "https://goo.gl/maps/ua7NuUKhTFsQDWGh7"
    },
    {
        eventId: "6",
        day: "WED",
        date: "2",
        month: "OCT",
        title: "Bible Study",
        startTime: "6:00 PM",
        endTime: "7:30 PM",
        address: "10307 Eamon Rd NW",
        addressUrl: "https://goo.gl/maps/ua7NuUKhTFsQDWGh7"
    },
    {
        eventId: "7",
        day: "SUN",
        date: "6",
        month: "OCT",
        title: "Sunday Service",
        startTime: "9:00 AM",
        endTime: "11:00 AM",
        address: "10307 Eamon Rd NW",
        addressUrl: "https://goo.gl/maps/ua7NuUKhTFsQDWGh7"
    },
    {
        eventId: "8",
        day: "WED",
        date: "9",
        month: "OCT",
        title: "Bible Study",
        startTime: "6:00 PM",
        endTime: "7:30 PM",
        address: "10307 Eamon Rd NW",
        addressUrl: "https://goo.gl/maps/ua7NuUKhTFsQDWGh7"
    },
]

class EventScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <common.Header>
                    <common.PageTitle>Upcoming Events</common.PageTitle>
                </common.Header>
                <View
                    style={{ flex: 1, backgroundColor: colors.background_color }}
                >
                    {/* <comp.EventCard
                        day="WED"
                        date="29"
                        month="SEP"
                        title="Sunday Service"
                        startTime="9:00 AM"
                        endTime="11:00 AM"
                        address="10307 Eamon Rd NW" 
                        addressUrl="https://goo.gl/maps/ua7NuUKhTFsQDWGh7"/> */}
                        <comp.EventList data={DATA}/>
                </View>
            </SafeAreaView>
        );
    }
}
export default EventScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});