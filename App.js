import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Feed from './src/Feed';

const AppNavigator = createStackNavigator({
  FeedScreen: { screen: Feed },
}, {
  initialRouteName: 'FeedScreen',
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
