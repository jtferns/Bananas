import React from 'react';
import { StackNavigator } from 'react-navigation';

import Cities from './Cities';

const RouteConfig = {
  Cities: {
    screen: Cities,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#ff7f00',
      }
    }
  },
}

export default StackNavigator(RouteConfig);
