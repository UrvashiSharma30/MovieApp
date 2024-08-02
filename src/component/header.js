import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';

export default function Header() {

    return (
        <View style={styles.headerContainer}>
            <Icon2
                name="glasses"
                size={60}
                style={styles.icon2}
            />
            <Text style={styles.text}>Movies</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'black',
        flexDirection: 'column'
    },
    icon2: {
        marginLeft: 12,
        color: 'white'
    },
    text: {
        color: 'white',
        fontSize: 12,
        marginLeft: 22,
        marginTop: -16
    }
})