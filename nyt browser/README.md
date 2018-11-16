# New York Times article browser
Starter files are from https://github.com/CS47-Stanford

## Version 1: Assignment 3
I broke down the features into 3 components.
- Logo
- Search bar - a `TextInput` component
- List of generated articles - the product of the list’s render function

### Logo
This is just an image of the NYT's logo that takes up the width of the screen. To ensure that on all devices, I used the `Dimensions` API to calculate the width.

```
width: Dimensions.get('window').width
```

### Search
To allow the user to type
I used the `TextInput`'s property `onChangeText` to retrieve the text of the input box as the user types.

To complete their search, the user can either
1. Press enter
2. Click the search icon

For 1), I used the function `onSubmitEditing` to run search queries instantly.
For 2), I called the function `onPress`. Both led to a function that ran the search query and dismissed the keyboard.

```
searchComplete = () => {
  Keyboard.dismiss()
  this.props.loadArticles(this.state.text)
}
```


### News

To retrieve the articles, I used the user input `this.state.text` entered into the search bar to call the function `loadArticles`. This function utilized the NYT API to return a list of articles matching the search term.

```
loadArticles = async (searchTerm = '', category = '') => {
  this.setState({articles:[], loading: true});
  var resultArticles = [];
  if (category === '') {
    resultArticles = await APIRequest.requestSearchPosts(searchTerm);
  } else {
    resultArticles = await APIRequest.requestCategoryPosts(category);
  }
  console.log(resultArticles);
  this.setState({loading: false, articles: resultArticles})
}
```

I did conditional rendering to render an ActivityIndicator instead of a List when the articles were loading.

```
// from starter files
getArticleContent = () => {
  const {articles, loading} = this.state;

  let contentDisplated = null;
  if (loading) {
    contentDisplated = <ActivityIndicator size="large" color="black"/>;
  } else {
    contentDisplated = <News articles={articles}/>
  }

  return (
    <View style={{flex: 1}}>
      {contentDisplated}
    </View>
  )
}
```

Then to display the articles, I implemented a `FlatList`. In order to implement the “tap to view” functionality, I used the `url` property of the article along with the `Linking` component from the package react-native.

```
onPress={() => Linking.openURL(item.url)}
```
