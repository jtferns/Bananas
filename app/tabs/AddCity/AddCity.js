import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { addCity } from '../../actions/cityActions';

const { width } = Dimensions.get('window');

class AddCity extends React.Component {
  state = {
    input: {
      city: '',
      country: '',
    }
  }
  onChangeText = (key, value) => {
    this.setState({
      input: {
        ...this.state.input,
        [key]: value,
      }
    })
  }
  onPress = () => {
    const location = {
      name: this.state.input.city,
      country: this.state.input.country
    };
    this.props.dispatchAddCity(location);
    this.props.navigation.navigate('Cities');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          style={styles.logo}
          source={require('../../assets/citieslogo.png')}
        />
        <TextInput
          placeholder='City'
          value={this.state.input.city}
          onChangeText={value => this.onChangeText('city', value)}
          style={styles.input}
        />
        <TextInput
          placeholder='Country'
          value={this.state.input.country}
          onChangeText={value => this.onChangeText('country', value)}
          style={styles.input}
        />
        <Button
          buttonStyle={{ marginTop: 8 }}
          color='#fff'
          title='Submit'
          onPress={this.onPress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ff7f00',
  },
  input: {
    backgroundColor: '#fff',
    height: 55,
    marginHorizontal: 15,
    marginTop: 8,
    padding: 9,
  },
  logo: {
    maxHeight: 36,
    marginTop: 100,
    alignItems: 'center',
    maxWidth: width,
  }
})

const mapDispatchToProps = {
  dispatchAddCity: (city) => addCity(city),
};

export default connect(null, mapDispatchToProps)(AddCity)
