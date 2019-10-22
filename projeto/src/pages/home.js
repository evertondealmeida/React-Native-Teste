import React from 'react';

import { Text } from 'react-native';
//const { navigation } = this.props;
const Home = ({navigation}) => (
    <Text>{JSON.stringify(navigation.getParam('uid', 'default value'))}</Text>
);

//Home.navigationOptions = ({ navigation }) => ({
//    title: navigation.state.params.home.title
//});

export default Home;