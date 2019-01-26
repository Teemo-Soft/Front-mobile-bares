import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextStyle, Icon } from '../components';
import { createStackNavigator } from 'react-navigation';
import { Colors, Icons } from '../constants';
import { Container } from "native-base";
import { MapView, Marker } from 'expo';

class ViewMap extends React.Component {
  componentWillMount() {
    this.props.navigation.openDrawer()
  }

  constructor(props) {
    super(props);

    this.state = {
      error:null,
      actual_location: [],
      locations: []
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log(position);
         this.setState({
           latitud: position.coords.latitude,
           longitud: position.coords.longitude,
           error: null,
           actual_location: [...this.state.actual_location, {lat: position.coords.latitude, lng: position.coords.longitude}]
         });
         
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }


  render() {
      console.log(this.state.actual_location)
    

    
    return (
      <Container>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 10.9878,
          longitude:  -74.7889,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          
        }}
      />
      </Container>
    );
  }

   /*

  render() {
    return (
      <Container>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 10.9878,
          longitude:  -74.7889,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      </Container>
    );
  }
  */
}

 


export default ViewMapNavigator = createStackNavigator(
  {
    ViewMap: ViewMap
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