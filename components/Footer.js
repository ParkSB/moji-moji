import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput underlineColorAndroid='#F8F8F8' style={styles.input} placeholder={'What do you think?'} returnKeyType={'send'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 60,
    backgroundColor: '#FFB900',
    borderTopWidth: 2,
    borderTopColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  input: {
    paddingTop: 5, 
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 0,
    borderRadius: 100,
  }
});