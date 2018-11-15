import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Images } from '../Themes';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


export default class ActionBar extends React.Component {


  render() {

    const {randomProfile} = this.props;

    return (
      <View style={styles.actionBar}>

        // rewind
        <TouchableOpacity>
            <View style={styles.smallImageWrapper}>
              <Ionicons
                name='md-arrow-round-back'
                size={22}
                color='#f3bc4e'
              />
            </View>
        </TouchableOpacity>

        // nope
        <TouchableOpacity onPress={() => randomProfile('Dislike')}>
            <View style={styles.bigImageWrapper}>
              <Ionicons
                name='md-close-circle'
                size={28}
                color='#e8606b'
              />
            </View>
        </TouchableOpacity>

        // boost
        <TouchableOpacity>
            <View style={styles.smallImageWrapper}>
            <Ionicons
              name='md-glasses'
              size={25}
              color='#a05fdd'
            />
            </View>
        </TouchableOpacity>

        // like
        <TouchableOpacity onPress={() => randomProfile('Like')}>
            <View style={styles.bigImageWrapper}>
              <Ionicons
                name='md-flame'
                size={28}
                color='#7be5c3'
              />
            </View>
        </TouchableOpacity>

        // superlike
        <TouchableOpacity onPress={() => randomProfile('SuperLike')}>
            <View style={styles.smallImageWrapper}>
              <Ionicons
                name='md-star'
                size={22}
                color='#57b3e9'
              />
            </View>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionBar: {
    width: '75%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  smallImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20
  },
  bigImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25
  },
  smallImage: {
    width: 22,
    height: 22
  },
  bigImage: {
    width: 25,
    height: 25
  }
});
