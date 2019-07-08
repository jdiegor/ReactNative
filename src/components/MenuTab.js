import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text, StyleProvider  } from "native-base";

import Dashboard from '../views/Dashboard';
import Invoice from '../views/Invoice';
import Search from '../views/Search';
import Company from '../views/Company';


import getTheme from '../../native-base-theme/components';
import platformTheme from '../../native-base-theme/variables/platform';

const TabNavigator = createBottomTabNavigator({
  Dashboard: Dashboard,
  Invoice: Invoice,
  Search: Search,
  Company: Company,
},
{
  tabBarPosition: "bottom",
  tabBarComponent: props => {
    console.log(props.navigationState);
    return (
      <StyleProvider style={getTheme(platformTheme)}>
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigation.state.index === 0}
            onPress={() => props.navigation.navigate("Dashboard")}>
            <Icon name="analytics" />
            <Text>Indicador</Text>
          </Button>

          <Button
            vertical
            active={props.navigation.state.index === 1}
            onPress={() => props.navigation.navigate("Invoice")}>
            <Icon name="paper" />
            <Text>Factura</Text>
          </Button>

          <Button
            vertical
            active={props.navigation.state.index === 2}
            onPress={() => props.navigation.navigate("Search")}>
            <Icon name="search" />
            <Text>Buscador</Text>
          </Button>

          <Button
            vertical
            active={props.navigation.state.index === 3}
            onPress={() => props.navigation.navigate("Company")}>
            <Icon name="briefcase" />
            <Text>Empresa</Text>
          </Button>
        </FooterTab>
      </Footer>
      </StyleProvider>
    );
  }
});

export default createAppContainer(TabNavigator);