import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedDetail from '../screens/FeedDetail';
import Home from '../screens/home/Home';
import {FeedItemType} from '../type';

export type ParamsStack = {
  Home: undefined;
  FeedDetail: {item: FeedItemType};
};

const Stack = createNativeStackNavigator<ParamsStack>();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FeedDetail" component={FeedDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
