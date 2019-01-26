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
      error: null,
      actual_location: [],
      locations: [],
      location1: { coords: { latitude: 10.9878, longitude: -74.7889 } },
      location2: { coords: { latitude: 11.9878, longitude: -74.7889 } }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitud: position.coords.latitude,
          longitud: position.coords.longitude,
          error: null,
          actual_location: [...this.state.actual_location, { lat: position.coords.latitude, lng: position.coords.longitude }],
          locations: [...this.state.locations, { lat: position.coords.latitude, lng: position.coords.longitude, 
            title: 'Título ubicación', description: 'Descripción de la ubicación'}
          ]
        });

      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
    
  }


  render() {
    console.log(this.state.locations)


    return (
      <Container>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 10.9878,
            longitude: -74.7889,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

          }}
        >

          {this.state.locations.map((marker, key) => (
            <MapView.Marker
              key={key}
              coordinate={{'latitude': marker.lat, 'longitude': marker.lng}}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>

      </Container>
    );
  }
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