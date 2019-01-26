import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { createStackNavigator } from 'react-navigation';
import { Icon } from '../components';
import { Colors, Icons } from '../constants';

class SettingsScreen extends React.Component {
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}

export default createStackNavigator(
  {
    Settings: SettingsScreen
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
