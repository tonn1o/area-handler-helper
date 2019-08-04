import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/home';
import TabBarIcon from '../../shared/components/tab-bar-icon';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="home"
    />
  ),
};

export default HomeStack;
