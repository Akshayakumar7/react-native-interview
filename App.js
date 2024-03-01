import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';
import 'react-native-gesture-handler';
import MyDrawer from './src/Navigation/DrawerNavigation';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();
  const isUserAuthenticated = true;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        {
          isUserAuthenticated ? <>
            <Stack.Screen name="Drawer" component={MyDrawer} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />

          </> :
            <>
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Signup' component={SignupScreen} />

            </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}