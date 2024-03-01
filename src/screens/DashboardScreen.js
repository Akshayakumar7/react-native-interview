import { View, Text, Button } from 'react-native'
import React from 'react'

const Dashboard = ({ navigation }) => {
    console.log(
        "new log", navigation
    )
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hello, Dashboard!</Text>
            <View style={{ height: 20 }} />
            <Button title='to Home' onPress={() => navigation.navigate("Home")} />
            <View style={{ height: 20 }} />
            <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
        </View>
    )
}

export default Dashboard