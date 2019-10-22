
import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import FirebaseService from "../services/FirebaseService";
import {firebaseDatabase} from '../utils/firebaseUtils';
import ItemComponent from '../components/ItemComponent';
let usuarioRef = firebaseDatabase.ref('/usuario');
//const { navigation } = this.props;
// var config = { 
//     databaseURL: "https://react-native-firebase-807a1.firebaseio.com",
//     projectId: "react-native-firebase-807a1", 
// }; 
// if (! firebase.apps.length) { 
//     firebase.initializeApp (config); 
// }

// readUserData() {
//     firebase.database().ref('usuario/').on('value', function (snapshot) {
//         console.log(snapshot.val())
//     });
// }
// const Home = ({navigation}) => (
//     <Text>{JSON.stringify(navigation.getParam('uid', 'default value'))}</Text>
    
// );
export default class Home extends Component {
    state = {
        usuario: []
    };
    // static navigationOptions = {
    //     title: usuario
    // };
    componentDidMount() {
        usuarioRef.on('value', snapshot => {
        let data = snapshot.val();
        let usuario = Object.values(data);
        this.setState({ usuario });
        });


        //FirebaseService.getDataList('usuario', (dataReceived) => this.setState({data: dataReceived}))
    }
    render() {
        const { navigation } = this.props;
        let user= this.state.usuario[0];
        console.log(user);
        return (
            
            <View style={styles.container}>
                <Text>{JSON.stringify(navigation.getParam('uid', 'default value'))}</Text>
                {this.state.usuario.length > 0 ? (
                    <ItemComponent usuario={this.state.usuario} />
                ) : (
                    <Text>No usuario</Text>
                )}
                
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});


//Home.navigationOptions = ({ navigation }) => ({
//    title: navigation.state.params.home.title
//});

//export default Home;