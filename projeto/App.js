/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import firebase from 'reacti-native-firebase';

const App: () => React$Node = () => {
    state = {
        email:'',
        password:'',
        isAuthenticated: false,
    };
    login = async () => { 
        const {email, password} = this.state;
        try{
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            this.setState({isAuthenticated: true});
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    }
    return ( 
        <View style={styles.container}>
             <TextInput 
                style={styles.input}
                placeholder="Digite seu email"
                value={this.state.email}
                onChangeText={email => this.setState({email})}
            />
            <TextInput 
                style={styles.input}
                placeholder="Digite sua senha"
                value={this.state.password}
                onChangeText={password => this.setState({password})}
            />
            <TouchableOpacity style={styles.button} onPress={this.login}>
                <Text style={styles.buttonText}>Logar</Text>
            </TouchableOpacity>
            { this.state.isAuthenticated ? <Text>Logado com sucesso</Text>:null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333', 
        padding: 20,
  },
    input: {
        height: 45,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderColor: '#EEE',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    }, 
    button: {
        height: 45,
        backgroundColor: '#069',
        alignSelf: 'stretch',
        paddingHorizontal: 20,   
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default App;
