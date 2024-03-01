import { View, Text, Button } from 'react-native'
import React from 'react'

const Article = ({ navigation }) => {
    console.log("navigation>>>>", navigation)
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hello,   this is an article!</Text>

        </View>
    )
}

export default Article