import { View, Text } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hello, Profile Screen!</Text>
        </View>
    )
}

export default ProfileScreen