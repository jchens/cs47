# Tinder
Starter files are from https://github.com/CS47-Stanford

## Version 1: Assignment 2
First, I focused on replicating the UI of the iconic swipe screen, which I broke down into 3 components.
- Top bar - includes the settings and chat icons and the Tinder logo
- Main view - contains the profile card
- Action bar - bar containing all the buttons that users interact with

These are the screenshots I was aiming to mimic:
![alt text](https://github.com/jchens/cs-47/blob/master/tinder%20applet/version%201/screenshot_to_mimic.png)

### Top bar
To create the top bar, I arranged the images in a row sure to use set the `resizeMode="contain"`. Throughout this applet, in order to create a responsive application that runs and has a consistent look on both iOS and Android, I made sure to use the component `Flexbox` with the stylesheets.
[code of stylesheets]

### Main view
To create
I first got the details of Harold's profile and set the state accordingly, so I could later use that information to set the card contents.
```  
var haroldProfile = Profiles.harold;
  this.state = {
    profileImage: haroldProfile.image,
    name: haroldProfile.name,
    age: haroldProfile.age,
    occupation: haroldProfile.occupation
  };
```
I then used stylesheets to mimic the UI. To ensure the picture always remains a square, I also set `aspectRatio: 1` in the stylesheet.

### Action bar
The implementation of this was pretty similar to the top bar, with the addition of `TouchableOpacity` to allow for "pressable" buttons.
```
<TouchableOpacity>
  <View style={styles.button_small}>
    <Image
    resizeMode="contain"
    style={styles.image_small}
    source={Images.rewind}>
    </Image>
  </View>
</TouchableOpacity>
```

To clean up my code and make the later steps easier to keep organized, I then turned each of the 3 parts into its own custom component.
```
<View style={styles.container}>
  <TopBar/>
  <MainView/>
  <ActionBar/>
</View>
```
