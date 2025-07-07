import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MyScansScreen from './screens/MyScansScreen';
import PremiumScreen from './screens/PremiumScreen';
import FAQScreen from './screens/FAQScreen';
import SettingsScreen from './screens/SettingsScreen';
import InviteScreen from './screens/InviteScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerScreens() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#EF156F',
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="My Scans" component={MyScansScreen} />
      <Drawer.Screen name="Get Premium" component={PremiumScreen} />
      <Drawer.Screen name="F.A.Q" component={FAQScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Invite Friend" component={InviteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Drawer" component={DrawerScreens} />
        <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
        {/* Add more screens if needed, like CaptureScreen or Preview */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
