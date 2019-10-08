import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import EventCard from './EventCard'

class EventList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <EventCard
                            day={item.day}
                            date={item.date}
                            month={item.month}
                            title={item.title}
                            startTime={item.startTime}
                            endTime={item.endTime}
                            address={item.address}
                            if 
                            addressUrl={item.addressUrl}
                             />
                    }
                    keyExtractor={(item) => item.eventId}
                />
            </View>
        );
    }
}
export default EventList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});