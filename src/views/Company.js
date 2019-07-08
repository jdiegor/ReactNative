import React, { Component } from "react";
import { Container, Header, Content, Left, Right, Body, Title, Item, Label, Input } from "native-base";

export default class Company extends React.Component {
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Container>

          <Header>

            <Left />
            <Body>
              <Title>Empresa</Title>
            </Body>
            <Right />

          </Header>

          <Content padder>

          </Content>
        </Container>
      );
    }
  }