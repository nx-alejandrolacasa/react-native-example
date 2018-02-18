import * as React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Button } from 'react-native';
import Face from './Face/Face';

import cageSrc from './cage.jpg';

type Props = {
  navigation: NavigationScreenProp<NavigationState, *>,
};

const Cage = ({ navigation }: Props) => (
  <Face
    faceSrc={cageSrc}
    button={
      <Button
        title="Turn it Travolta"
        onPress={() => navigation.navigate('Travolta')}
      />
    }
  />
);

Cage.navigationOptions = {
  title: 'Cage',
  headerStyle: {
    backgroundColor: 'blue',
  },
};

export default Cage;
