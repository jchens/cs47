import React from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Images, Profiles } from '../Themes';

export default class TopBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.nav_bar}>
        // settings
        <Image
          resizeMode="contain"
          style={styles.nav_image}
          source={Images.settings}
        />
        // tinder logo
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={Images.logo}
        />
        // chat
        <Image
          resizeMode="contain"
          style={styles.nav_image}
          source={Images.chat}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
// nav bar
  nav_bar: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 44 : 56,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F0F0F0',
    paddingTop: 10,
  },
  logo: {
    flex: 5,
    height: 25,
  },
  nav_image: {
    flex: 1,
    tintColor: '#C5C5C5',
    height: 25,
  },
});
