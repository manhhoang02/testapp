import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedDetail from '../screens/FeedDetail';
import Home from '../screens/home/Home';
import {ParamsBottomTab, ParamsStack} from './params';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator<ParamsBottomTab>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Tab1" component={Home} />
      <BottomTab.Screen name="Tab2" component={Home} />
      <BottomTab.Screen name="Tab3" component={Home} />
      <BottomTab.Screen name="Tab4" component={Home} />
      <BottomTab.Screen name="Tab5" component={Home} />
      <BottomTab.Screen name="Tab6" component={Home} />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator<ParamsStack>();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="TabScreen"
          component={BottomTabNavigator}
        /> */}

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FeedDetail" component={FeedDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
