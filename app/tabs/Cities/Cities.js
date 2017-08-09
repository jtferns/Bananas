import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

import { fetchDataFromAPI } from '../../actions/cityActions';

class Cities extends React.Component {
  static navigationOptions = {
    headerTitle: <Image
      source={require('../../assets/citieslogo.png')}
      style={{ marginTop: -3, height: 32, width: 120 }}
      resizeMode='contain'
    />
  }
  componentDidMount() {
    this.props.dispatchFetchDataFromAPI()
  }
  render() {
    const { navigation } = this.props;
    const cities = Object.values(this.props.cities);
    return (
      <View style={styles.container}>
        {
          cities.length === 0 ?
          <ActivityIndicator style={{ flex: 1, alignItems: 'center' }} color='#1f78b4' size='large'/>
          :
          cities.map((city, index) => (
            <ListItem
              onPress={() => navigation.navigate('City', city)}
              key={index}
              title={city.name}
            />
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fee8c8',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
})

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities
  }
}

const mapDispatchToProps = {
  dispatchFetchDataFromAPI: () => fetchDataFromAPI()
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
