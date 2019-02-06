import React from 'react';
import { Text, SafeAreaView, View, Image, TouchableHighlight, StyleSheet, Dimensions, width, height } from 'react-native';
import PropTypes from 'prop-types';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class Cards extends React.Component {
  render() {
    console.log(this.props)
    return (
      this.props.bares.map((data, key) => (
        <Card
          key={key} 
          title={data.name}
          image={{ uri: data.avatar}}>
          <Text style={{ marginBottom: 10 }}>
             Descripción : {data.description}
          </Text>
          <Button
            //icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Buscar en Maps' />
        </Card>
      )
      )
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

