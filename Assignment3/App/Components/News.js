/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, TouchableOpacity } from 'react-native'
import { material } from 'react-native-typography'
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
}


  render () {
    const {articles} = this.props;

    return (
      <View style={styles.container}>
        {/*Some FlatList or SectionList*/}
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>
            <TouchableOpacity style={styles.cards} onPress={() => Linking.openURL(item.url)}>
              <Text style={material.title}>{item.title}</Text>
              <Text style={material.body1}>{item.snippet}</Text>
              <Text style={material.button}>{item.byline}</Text>
              <Text style={material.caption}>{item.date}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  cards: {
    flex: 0.5,
    backgroundColor: 'white',
    paddingBottom: 20,
  }
});
