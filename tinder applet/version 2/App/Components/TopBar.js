import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform
} from 'react-native';
import { Images } from '../Themes';
import { Ionicons } from '@expo/vector-icons';

export default class TopBar extends React.Component {

  render() {
    return (
      <View style={styles.topBar}>
        <Ionicons name="md-settings" size={32} color="#A5A5A5" />
        <Image source={Images.logo} resizeMode={'contain'} style={styles.titleImage}/>
        <Image source={Images.chat} style={styles.rightIcon}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#A5A5A5'
  },
  leftIcon: {
    height: 40,
    width: 40,
    tintColor: "#C5C5C5"
  },
  titleImage: {
    height: 30,
    width: '65%',
  },
  rightIcon: {
    height: 40,
    width: 40,
    tintColor: "#C5C5C5"
  },
});
