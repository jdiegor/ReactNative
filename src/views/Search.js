import React, { Component } from "react";
import {Platform, StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import { Container, Header, Content, Icon, Item, Button, Text, Input, List, ListItem, Left, Right, Body, Thumbnail, StyleProvider } from "native-base";
import UserService from '../services/UserService';

import getTheme from '../../native-base-theme/components';
import platformTheme from '../../native-base-theme/variables/platform';

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      urlNext: ''
    }
  } 
  

   /* Evento que se ejecuta después de que los componentes han sudo montados */
   componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    this.setState({ loading: true });
    /*
    fetch(this.state.url)
    .then(res => res.json())
    */
    UserService.getAll()
    .then(res => {
      this.setState({
        data : res.results,
        url: res.next,
        loading: false
      })
    })

  }


  render() {
    const { navigate } = this.props.navigation;
    
    if(this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 
          <ActivityIndicator size="large" />
  
        </View>
      );
    }

    return (
      <StyleProvider style={getTheme(platformTheme)}>
      <Container>

        <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input placeholder="Usuarios" />
            <Icon name="cart" />
          </Item>
        </Header>

        <Content padder>

          <FlatList  
            data={ this.state.data }
            renderItem={({item}) =>     
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={{uri: item.picture.thumbnail}} />
                </Left>
                <Body>
                  <Text>
                    {item.name.first + ' ' + item.name.last}
                  </Text>
                  <Text numberOfLines={1} note>
                    {item.email}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    {item.nat}
                  </Text>
                </Right>
              </ListItem>
            }
            keyExtractor={(item, index) => index.toString()}  
          />

        </Content>
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03a9f4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});