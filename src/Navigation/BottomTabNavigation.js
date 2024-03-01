import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/DashboardScreen';
import Rewards from '../screens/RewardScreen';

const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Reward" component={Rewards} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation