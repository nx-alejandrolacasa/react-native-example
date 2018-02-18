import * as React from 'react';
import { Dimensions, Image, StyleSheet, ScrollView, View } from 'react-native';
import FadeIn from '../FadeIn/FadeIn';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    width: win.width,
    height: win.width * (4 / 5),
  },
  buttonContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});

type Props = {
  faceSrc: string,
  button: React.Element<*>,
};

const Face = ({ faceSrc, button }: Props) => (
  <ScrollView>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={faceSrc} resizeMode="contain" />
    </View>
    <FadeIn style={styles.buttonContainer}>{button}</FadeIn>
  </ScrollView>
);

export default Face;
