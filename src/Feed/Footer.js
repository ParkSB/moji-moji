import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 60,
    backgroundColor: '#FFB900',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#D0D0D0',
    borderTopWidth: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 0,
    borderRadius: 100,
  }
});

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput underlineColorAndroid="#F8F8F8" style={styles.input} placeholder="✏️ Type here ..." returnKeyType="send" />
      </View>
    );
  }
}
