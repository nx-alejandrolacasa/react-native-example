import * as React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Button } from 'react-native';
import Face from '../Face/Face';

import travoltaSrc from './travolta.jpg';

type Props = {
  navigation: NavigationScreenProp<NavigationState, *>,
};

const Travolta = ({ navigation }: Props) => (
  <Face
    button={
      <Button
        title="Go back to Cage"
        onPress={() => navigation.goBack()}
      />
    }
    faceSrc={travoltaSrc}
  />
);

Travolta.navigationOptions = {
  title: 'Travolta',
  headerStyle: {
    backgroundColor: 'red',
  },
};

export default Travolta;
