import React, {Component, createRef} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

let data = Array(1001)
  .fill(null)
  .map((_, i) => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    return {
      key: String(i),
      color: color,
    };
  });

let currentOffset = 0;
let intervalTime = 300;
const flatListRef = createRef();

export default class FlatListBasics extends Component {
  _scroolOffset = () => {
    if (currentOffset >= data.length * (styles.item.height + 16)) {
      this._stopAutoPlay();
    }
    flatListRef.current.scrollToOffset({
      offset: currentOffset,
      animated: true,
    });
    currentOffset += 410;
  };

  _startAutoPlay = () => {
    this._timerId = setInterval(this._scroolOffset, intervalTime);
  };

  _stopAutoPlay = () => {
    if (this._timerId) {
      clearInterval(this._timerId);
      this._timerId = null;
    }
  };

  componentDidMount() {
    this._stopAutoPlay();
  }

  componentWillUnmount() {
    this._stopAutoPlay();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[{marginTop: 25}]} />
        <Button
          style={[{position: 'absolute', top: 50, left: 0}]}
          onPress={this._startAutoPlay}
          title="Start scrool"
          color="grey"
        />
        <FlatList
          ref={flatListRef}
          testID={'long_list'}
          accessibilityLabel={'long_list'}
          data={data}
          ItemSeparatorComponent={FlatListItemSeparator}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            return (
              <CustomRow index={item.key} color={item.color} label={item.key} />
            );
          }}
        />
      </View>
    );
  }
}

const FlatListItemSeparator = () => {
  return <View style={{height: 16, width: '100%', backgroundColor: '#FFF'}} />;
};

const IMAGES = {
  image0: require('./assets/images/0.jpeg'),
  image1: require('./assets/images/1.jpeg'),
  image2: require('./assets/images/2.jpeg'),
  image3: require('./assets/images/3.jpeg'),
  image4: require('./assets/images/4.jpeg'),
  image5: require('./assets/images/5.jpeg'),
  image6: require('./assets/images/6.jpeg'),
  image7: require('./assets/images/7.jpeg'),
  image8: require('./assets/images/8.jpeg'),
  image9: require('./assets/images/9.jpeg'),
  image10: require('./assets/images/10.jpeg'),
  image11: require('./assets/images/11.jpeg'),
  image12: require('./assets/images/12.jpeg'),
  image13: require('./assets/images/13.jpeg'),
  image14: require('./assets/images/14.jpeg'),
  image15: require('./assets/images/15.jpeg'),
  image16: require('./assets/images/16.jpeg'),
  image17: require('./assets/images/17.jpeg'),
  image18: require('./assets/images/18.jpeg'),
  image19: require('./assets/images/19.jpeg'),
};

function getImage(num) {
  return IMAGES['image' + (num % 20)];
}

function CustomRow({index, color, label}) {
  const spinValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${spinValue.value}deg`}],
    };
  });

  React.useEffect(() => {
    spinValue.value = withRepeat(
      withTiming(360, {duration: 5000, easing: Easing.linear}),
      -1,
    );
  }, []);

  return (
    <View style={[styles.item_container, {backgroundColor: color}]}>
      <FastImage
        style={styles.image}
        source={getImage(index)}
        resizeMode={'stretch'}
      />
      <AnimatedFastImage
        style={[styles.image, animatedStyle]}
        source={getImage(index)}
        resizeMode={'stretch'}
        fadeDuration={0}
      />
      <Text accessibilityLabel={label} style={styles.item}>
        {index}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item_container: {
    height: 100,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
  },
  item: {
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    fontSize: 18,
    height: 100,
  },
});
