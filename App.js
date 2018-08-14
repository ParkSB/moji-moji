import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar />
        <Content />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
