import React from 'react';
import { StyleSheet } from 'react-native';
import { TextStyle, Icon } from '../components';
import {
  View,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';
export default class Login extends React.Component {

  login = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/robot-prod.png')}
          style={{ height: 100, width: 100 }} />
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={[styles.input, { marginBottom: 30 }]} secureTextEntry={true} />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} style={[styles.button, { backgroundColor: '#D83737' }]}>
          <View>
            <TextStyle style={{ color: '#fff', fontWeight: 'bold' }}>
              Log In
            </TextStyle>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, { backgroundColor: '#9B9A9A' }]}>
          <View>
            <Icon
              name="logo-google"
              color="#fff"
              size={20}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, { backgroundColor: '#4267b2' }]}>
          <View>
            <Icon
              name="logo-facebook"
              color="#fff"
              size={20}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 70
  },
  input: {
    height: 40,
    padding: 8,
    lineHeight: 23,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    fontSize: 18,
    margin: 8,
    width: 200,
    marginTop: 30
  },
  button: {
    padding: 10,
    marginTop: 12,
    borderRadius: 15,
    width: 200,
    alignItems: 'center'
  }
});

