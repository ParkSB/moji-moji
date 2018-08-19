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
  constructor(props) {
    super(props);

    this.state = {
      cards: [{
        author: 'lee.taeyoung',
        content: 'lorem ipsum',
        avatar: '👩‍🚀',
      }],
    };
  }

  render() {
    const { cards } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {cards.map((c) => {
          return <Card author={c.author} content={c.content} avatar={c.avatar} />;
        })}
      </ScrollView>
    );
  }
}
