import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/colors';

interface ITabBarIconParams {
  name: string
  size: number
  focused: boolean
}

const TabBarIcon = ({ name, size, focused }: ITabBarIconParams) => (
  <Icon
    name={name}
    size={size || 26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

export default TabBarIcon;
