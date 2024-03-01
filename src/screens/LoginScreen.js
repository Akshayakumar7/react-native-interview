import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {
    const [count, setCount] = useState(0);

    const updateValue = () => {
        setCount(count + 1);
        setCount(count + 1)
    }
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button title='Click me' onPress={updateValue} />
        </View>
    )
}

export default LoginScreen