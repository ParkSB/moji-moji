import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D0D0D0',
    borderBottomWidth: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    elevation: 1,
    marginBottom: 20,
  },
  headerContainer: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#D0D0D0',
    borderBottomWidth: 1,
  },
  headerText: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  contentContainer: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#D0D0D0',
    borderBottomWidth: 1,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    paddingLeft: 10,
  },
});

export default class Card extends React.Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };

  render() {
    const { author, content, avatar } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {avatar}
            {' @'}
            {author}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text style={styles.icon}>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>❤️</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
