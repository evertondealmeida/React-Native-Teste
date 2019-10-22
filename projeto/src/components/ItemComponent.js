import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class ItemComponent extends Component {
  static propTypes = {
    usuario: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.usuarioList}>
        {this.props.usuario.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{JSON.stringify(item)}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});