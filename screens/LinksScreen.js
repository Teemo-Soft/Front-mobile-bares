import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { createStackNavigator } from 'react-navigation';
import { Icon } from '../components';
import { Colors, Icons } from '../constants';

class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

export default createStackNavigator(
  {
    LinksScreen: LinksScreen
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
        ), headerRight: (
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
