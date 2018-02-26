import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Cage from './src/Cage/Cage';
import Travolta from './src/Travolta/Travolta';

const RootStack = StackNavigator(
  {
    Cage: { screen: Cage },
    Travolta: { screen: Travolta },
  },
  {
    initialRouteName: 'Cage',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const App = () => <RootStack />;

export default App;
