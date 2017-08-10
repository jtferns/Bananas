import React from 'react';
import {
  View,
  Text,
} from 'react-native';

class City extends React.Component {
  static navigationOptions = ({ navigation: { state: { params: { name } } } }) => {
    return {
      title: name,
    }
  }
  render() {
    const { navigation: { state: { params: city }} } = this.props;
    return (
      <View>
        <Text>{city.name}</Text>
        <Text>{city.country}</Text>
        <Text>{city.locations.join(', ')}</Text>
      </View>
    )
  }
}

export default City;
