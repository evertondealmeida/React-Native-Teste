
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from './pages/login';
import Home from './pages/home';

const NavStack = createStackNavigator({
    Login: { 
        screen: Login,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#069"
            },
            headerTintColor: "#FFF"    
        }
    },
    Home: {
        screen: Home
    }
});

const App = createAppContainer(NavStack);

export default App;