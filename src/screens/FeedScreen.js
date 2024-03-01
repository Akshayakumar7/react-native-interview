import { View, Text, Button } from 'react-native'
import React from 'react'

const FeedScreen = ({ navigation }) => {
    console.log("navigation>>>>", navigation)
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hello, FeedScreen!</Text>

        </View>
    )
}

export default FeedScreen