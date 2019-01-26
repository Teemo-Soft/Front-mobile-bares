import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import {
  Content,
  List,
  ListItem,
  Container,
  Left
} from "native-base";
import {
  Icon,
  TextStyle
} from '../components';
import { ItemsNav } from './ItemsNav';

const SideBar = (props) => (
  <Container>
    <Content
      bounces={false}
      style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
    >
      <View style={styles.container} >
        <Image source={require('../assets/images/robot-dev.png')} style={{ height: 50, width: 50 }} />
        <TextStyle>
          App navigator
        </TextStyle>
      </View>
      <List
        dataArray={ItemsNav}
        renderRow={data =>
          <ListItem
            button
            onPress={() => props.navigation.navigate(data.route)}
          >
            <Left>
              <Icon
                style={{ paddingRight: 15 }}
                size={20}
                route={props.navigation.state.routeName}
                name={data.icon}
              />
              <TextStyle>
                {data.name}
              </TextStyle>
            </Left>
          </ListItem>}
      />
    </Content>
  </Container>
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

export default SideBar;


