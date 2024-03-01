import { View, Text, Button } from 'react-native'
import React from 'react'

const SidebarScreen = ({ navigation }) => {
    return (
        <View>
            <View style={{ height: 20 }} />
            <Button title='To Feed' onPress={() => navigation.navigate("Feed")} />
            <View style={{ height: 20 }} />
            <Button title='To Article' onPress={() => navigation.navigate("Article")} />
        </View>
    )
}

export default SidebarScreen