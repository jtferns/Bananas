import React from 'react';
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

import AddCity from './tabs/AddCity/AddCity';
import CitiesTab from './tabs/Cities/CitiesTab';

const RouteConfig = {
  Cities: {
    screen: CitiesTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/cityicon.png')}
          style={{ tintColor, width: 28, height: 28}}
        />
      )
    }
  },
  AddCity: {
    screen: AddCity,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          source={require('./assets/addicon.png')}
          style={{ tintColor, width: 28, height: 28}}
          labelStyle={{ fontSize: focused?25:12 }}
        />
      )
    }
  },
}

const TabConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#ff7f00',
    inactiveTintColor: '#a6cee3',
    showIcon: true,
    indicatorStyle: {
      backgroundColor: '#666',
    },
    style: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ededed',
    }
  },
}

export default Routes = TabNavigator(RouteConfig, TabConfig);
