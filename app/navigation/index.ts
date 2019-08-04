import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './main-tab-navigator';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
}));
