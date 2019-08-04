import { createBottomTabNavigator } from 'react-navigation';

import HomeStack from './stacks/home';
import AreasStack from './stacks/area';

// TODO: To be implemented
// import TimerStack from './stacks/timer';
// import ReportsStack from './stacks/reports';

export default createBottomTabNavigator({
  AreasStack,
  HomeStack,
  // TODO: To be implemented
  // TimerStack,
  // ReportsStack,
}, {
  tabBarOptions: {
    activeTintColor: '#3281ff',
    style: {
      backgroundColor: '#f7f9fa',
      borderTopWidth: 0,
    },
  },
});
