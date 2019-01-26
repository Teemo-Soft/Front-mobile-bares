import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextStyle, Icon } from '../components';
import { Colors, Icons } from '../constants';
import { Container } from "native-base";

class Home extends React.Component {
  componentWillMount() {
    this.props.navigation.openDrawer()
  }

  render() {
    return (
      <Container style={styles.container}>
        <TextStyle>
          Home
        </TextStyle>
      </Container>
    );
  }
}

export default HomeNavigator = createStackNavigator(
  {
    Home: Home
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 15 }}
            size={30}
            onPress={() => navigation.openDrawer()}
            name={Icons.menu}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 15 }}
            size={30}
            onPress={() => navigation.navigate('Login')}
            name={Icons.logOut}
          />
        ),
        headerTitle: navigation.state.routeName,
        headerTintColor: Colors.tabIconDefault
      };
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});