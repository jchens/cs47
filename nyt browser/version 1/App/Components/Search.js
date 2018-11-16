import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  ScrollView} from 'react-native'
import { material } from 'react-native-typography'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'


export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Search for News' };
  }

  searchComplete = () => {
    Keyboard.dismiss()
    this.props.loadArticles(this.state.text)
  }

  render () {
    return (
      <View style={styles.search}>

        {/*user input and a search button!*/}
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={styles.search}
        >
          <View style={styles.search_bar}>
            <TextInput
              style={styles.input}
              blurOnSubmit={false}
              clearButtonMode='while-editing'
              value={this.state.text}
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={this.searchComplete}
            />

          <View style={styles.search_icon} onPress={this.searchComplete}>
              <FontAwesome
                name='search'
                size={20}
              />
          </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  search: {
    flexDirection: 'row',
    backgroundColor: Colors.snow,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },

  search_bar: {
    height: 50,
    flex: 0.9,
    flexDirection: 'row',
    backgroundColor: Colors.silver,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  input: {
    width: Dimensions.get('window').width - 100,
    color: Colors.charcoal,
  },

  search_icon: {
    height: 30,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
