import React from 'react';
import { StackNavigator } from 'react-navigation';

import Cities from './Cities';
import City from './City';

const RouteConfig = {
  Cities: {
    screen: Cities,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#ff7f00',
      }
    }
  },
  City: {
    screen: City,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#fdbf6f',
      }
    }
  }
}

export default StackNavigator(RouteConfig);
