import React from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Images, Profiles } from '../Themes';

export default class MainView extends React.Component {
  constructor() {
    super();

    // setting up profile's details
    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.profile}>

        <View style={styles.profile_card}>
          // profile image
          <Image
          resizeMode="contain"
          style={styles.profile_pic}
          source={this.state.profileImage} />

          // profile details
          <View style={styles.profile_details}>
            <Text style={styles.profile_name}>
              <Text style={{fontWeight: 'bold'}}>
                {this.state.name}, {this.state.age}
              </Text>
            </Text>

            <Text style={styles.profile_job}>
              {this.state.occupation}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F0F0F0',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#C5C5C5',
  },

  profile_card: {
    top: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#C5C5C5',
  },

  profile_pic: {
    aspectRatio: 1,
    width: undefined,
    height: undefined,
  },

  profile_details: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  profile_name: {
    fontFamily: 'Helvetica',
    fontSize: 24,
  },

  profile_job: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#B0B0B0',
  },
});
