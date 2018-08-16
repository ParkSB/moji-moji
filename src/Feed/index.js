import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import Content from './Content';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});

class Feed extends React.Component {
  static navigationOptions = {
    title: '🐹 Moji Moji',
    headerStyle: {
      backgroundColor: '#FFB900',
    }
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <Content />
        <Footer />
      </View>
    );
  }
}

export default Feed;
