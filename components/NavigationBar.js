import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🐹 Moji Moji</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 90,
    backgroundColor: '#FFB900',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
