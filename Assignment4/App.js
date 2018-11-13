import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Ionicons } from '@expo/vector-icons';
import TopBar from './App/Components/TopBar';
import MainView from './App/Components/MainView';
import ActionBar from './App/Components/ActionBar';


export default class App extends React.Component {

  constructor() {
    super();
    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  randomProfile = async (input) => {
    Alert.alert(input);
    var newProfile = Profiles.random();
    // make sure you don't get the same profile twice
    while (this.state.name == newProfile.name) {
      newProfile = Profiles.random();
    }
    this.setState({
      profileImage: newProfile.image,
      name: newProfile.name,
      age: newProfile.age,
      occupation: newProfile.occupation,
    })
  }

  render() {


    return (
      <SafeAreaView style={styles.container}>
        <TopBar />
        <MainView randomProfile = {this.randomProfile} state1 = {this.state}/>

        <ActionBar randomProfile = {this.randomProfile}/>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
