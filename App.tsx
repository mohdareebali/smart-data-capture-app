import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import MyScansScreen from './screens/MyScansScreen';
import PremiumScreen from './screens/PremiumScreen';
import FAQScreen from './screens/FAQScreen';
import SettingsScreen from './screens/SettingsScreen';
import InviteScreen from './screens/InviteScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
