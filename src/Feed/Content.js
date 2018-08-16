import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import Card from './Card';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
});

export default class Content extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Card />
      </ScrollView>
    );
  }
}
