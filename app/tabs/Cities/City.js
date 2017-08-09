import React from 'react';
import {
  View,
} from 'react-native';

class City extends React.Component {
  static navigationOptions = ({ navigation: { state: { params: { name } } } }) => {
    return {
      title: name,
    }
  }
  render() {
    const { navigation } = this.props;
    console.log('navigation: ', navigation);
    return (
      <View>

      </View>
    )
  }
}

export default City;
