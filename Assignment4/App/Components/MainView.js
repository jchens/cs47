import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  Dimensions,
  Animated,
  PanResponder,
  Alert,
} from 'react-native';
import {Card} from 'react-native-elements';
const {height, width} = Dimensions.get('window');

export default class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({x:0, y:0})
        },
        onPanResponderMove: Animated.event([
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
          if (this.isSwipeArea(gesture)) {

            Animated.timing(
              this.state.pan,
              {toValue:{x:0,y:0}, duration: 1}
            ).start();

          } else {
            Animated.spring(
              this.state.pan,
              {toValue:{x:0,y:0}}
            ).start();
          }
        }
      });
  }

  isSwipeArea(gesture) {
    var swipeLeft = gesture.moveX < width /4;
    var swipeRight = gesture.moveX > width * 3/4;
    var swipeUp = gesture.moveY < height / 3;
    if (swipeLeft) {
      this.props.randomProfile("Dislike");
    } else if(swipeRight) {
      this.props.randomProfile("Like");
    } else if(swipeUp) {
      this.props.randomProfile("SuperLike");
    }
    return swipeLeft || swipeRight || swipeUp;
  }


  render() {
    return (
      <View style={styles.mainView}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {

    const {state1 } = this.props;


    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
      width: '100%',
    }

    if (this.state.showDraggable) {
      return (
        <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle]}
          >
          <Card style={styles.card}>
            <Image source={state1.profileImage} style={styles.profileImage}/>
            <View style={styles.nameAndAge}>
              <Text style={styles.name}>
                {state1.name + ", "}
              </Text>
              <Text style={styles.age}>
                {state1.age}
              </Text>
            </View>
            <Text style={styles.occupation}>
              {state1.occupation}
            </Text>
          </Card>
        </Animated.View>

      );
    }
  }
}



let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 0.9 * width,
    borderWidth: 1,
    borderColor: '#A5A5A5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: '100%',
    height: 0.9 * width,
    borderTopLeftRadius: 10
  },
  nameAndAge: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 16,
  },
  occupation: {
    marginLeft: 16,
    marginBottom: 8,
    fontSize: 16,
    color: '#A5A5A5',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  age: {
    fontSize: 24,
  },
});
