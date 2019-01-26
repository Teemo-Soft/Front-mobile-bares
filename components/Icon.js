import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={this.props.size}
        style={this.props.style}
        onPress={this.props.onPress}
        color={this.props.color ? this.props.color : Colors.tabIconDefault}
      />
    );
  }
}