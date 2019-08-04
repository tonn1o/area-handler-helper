import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../../shared/components/tab-bar-icon';
import AreasScreen from '../../screens/area';

const AreasStack = createStackNavigator({
  Areas: AreasScreen
});

AreasStack.navigationOptions = {
  tabBarLabel: 'Areas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="map"
    />
  ),
};

export default AreasStack;
