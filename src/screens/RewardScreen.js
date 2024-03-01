import { View, Text, Button } from 'react-native'
import React from 'react'

const Rewards = ({ navigation }) => {
    
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hello Rewards!</Text>
            <View style={{ height: 20 }} />
            <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
            <View style={{ height: 20 }} />
            <Button title='Open Home' onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

export default Rewards