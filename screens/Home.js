import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextStyle, Icon, Cards } from '../components';
import { Colors, Icons } from '../constants';
import { Container } from "native-base";

const bares = [
  {
    name: 'Bar 23',
    avatar: 'https://1481698044.rsc.cdn77.org/wp-content/uploads/2017/10/Restaurant-Bar-Design-Awads-2017-Piccolino-Hachem-experimenta-3-e1511513363350.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
  },
  {
    name: 'Bar 2',
    avatar: 'http://hotelsambencant.cat/photos/hf_ipanema_park_terrassa_amb_vistes_a_porto_i_el_riu_duero.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
  },
  {
    name: 'Bar 3',
    avatar: 'https://servinox.com.mx/blog/wp-content/uploads/2015/03/Contemporary-Restaurant-Bar-Interior-Lighting-Design-Glass-House-Tavern-Manhattan-NYC.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
  },
  {
    name: 'Bar 4',
    avatar: 'https://www.pullmantur.travel/media/images/b2bbrasil/barco/horizon/zonas-comunes/bar-zephir/608-240px/bar-zephir.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
  },
]

class Home extends React.Component {
  componentWillMount() {
    this.props.navigation.openDrawer()
  }

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          <Cards bares={bares} />
        </ScrollView>
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