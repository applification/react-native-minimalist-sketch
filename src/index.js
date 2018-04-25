import React from 'react';
import {
  Header,
  Photo,
  Text,
  Profile,
  Divider,
  PhotoInfo
} from 'react-native-minimalist';
import PropTypes from 'prop-types';
import { render, Artboard, View, StyleSheet } from 'react-sketchapp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mobile: {
    width: 375
  }
});

const Document = ({ system }) => (
  <Artboard
    name="React Native Minimalist Sketch"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 375,
      height: 800
    }}
  >
    <View style={styles.container}>
      <View style={styles.mobile}>
        <Header>Minimalist</Header>
        <Text>john-tierney.com</Text>
        <Divider fullWidth />
        <PhotoInfo
          photo={{
            uri:
              'https://scontent-lht6-1.cdninstagram.com/vp/8b749f16d5cadd6e680b479af5f237b0/5B68909F/t51.2885-19/10963846_377118132473154_1350059129_a.jpg'
          }}
          title="john_tierney_art"
        />
        <Photo
          imageURL={
            'https://scontent-lht6-1.cdninstagram.com/vp/43d6f9d19b29dbfc7b58c46a92ed425c/5B5770F5/t51.2885-15/e35/30602084_186676038631423_7930424840232632320_n.jpg'
          }
        />
      </View>
    </View>
  </Artboard>
);

export default () => {
  render(<Document />, context.document.currentPage());
};
