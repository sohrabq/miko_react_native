import * as React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Sponsor from './components/Sponsor';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        overlayColor: 'transparent',
      }}>
      {/* Screens */}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="Sponsor"
        component={Sponsor}
        options={{drawerLabel: 'Sponsor'}}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{drawerLabel: 'About'}}
      />
      <Drawer.Screen
        name="Signup"
        component={Signup}
        options={{drawerLabel: 'Sign Up'}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
