
import React, { Component } from 'react';
import { Text, View, TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
export default class App extends Component {
    static navigationOptions = {
        title: "Biri Sistemas e Automação"
    };
    state = {
        email:'',
        password:'',
        isAuthenticated: false,
    };
    login = async () => { 
        const {email, password} = this.state;
        try{
            const userAuthenticated = await firebase.auth().signInWithEmailAndPassword(email, password);
            let user= userAuthenticated.user.uid;
            this.setState({isAuthenticated: true});
            this.state.isAuthenticated ? this.props.navigation.navigate("Home",{uid: user}):this.props.navigation.navigate("Login");
            console.log(user);
        } catch (err) {
            this.props.navigation.navigate("Login");
            console.log(err);
        }
    }
    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWelcome}>Sejá Bem-Vindo</Text> 
        <Text style={styles.textTitle}> Sistema de Monitoramento Veícular </Text>
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
        <TouchableOpacity 
            style={styles.button} 
            onPress={this.login}>
            <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
            
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF', 
        margin: 10
    },
    input: {
        height: 45,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderColor: '#EEE',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10
    }, 
    button: {
        height: 45,
        backgroundColor: '#069',
        alignSelf: 'stretch',
        paddingHorizontal: 20,   
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold'
    },
    textWelcome:{
        fontSize: 30
    },
    textTitle:{
        height: 100,
        fontSize: 20
    }
});

