import React from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Images, Profiles } from '../Themes';

export default class ActionBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.button_bar}>
        // pressable buttons
        <TouchableOpacity>
          <View style={styles.button_small}>
            <Image
            resizeMode="contain"
            style={styles.image_small}
            source={Images.rewind}>
            </Image>
          </View>
        </TouchableOpacity>


        <TouchableOpacity>
          <View style={styles.button_large}>
            <Image
            resizeMode="contain"
            style={styles.image_large}
            source={Images.nope}>
            </Image>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.button_small}>
            <Image
            resizeMode="contain"
            style={styles.image_small}
            source={Images.boost}>
            </Image>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.button_large}>
            <Image
            resizeMode="contain"
            style={styles.image_large}
            source={Images.like}>
            </Image>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.button_small}>
            <Image
            resizeMode="contain"
            style={styles.image_small}
            source={Images.superLike}>
            </Image>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

// button bar
  button_bar: {
    flex: .3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 30,

  },

  button_small: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button_large: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

  },

  image_large: {
    width: 25,
    height: 25,
  },

  image_small: {
    width: 20,
    height: 20,
  },

});
