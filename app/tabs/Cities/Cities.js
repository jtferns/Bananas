import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { connect } from 'react-redux';

class Cities extends React.Component {
  static navigationOptions = {
    headerTitle: <Image
      source={require('../../assets/citieslogo.png')}
      style={{ marginTop: -3, height: 32, width: 120 }}
      resizeMode='contain'
    />
  }
  render() {
    console.log('props:', this.props)
    return (
      <View style={styles.container}>
        <Text>Hello from Cities</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities
  }
}

export default connect(mapStateToProps)(Cities)
