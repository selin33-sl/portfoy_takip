import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    height: windowHeight * 0.25,
    width: windowWidth,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },

  innerContainer: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.2,
    borderRadius: 15,
    backgroundColor: '#DBADFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    borderColor: 'white',
    borderWidth: 0.3,
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageGlow: {
    width: 120,
    height: 120,
  },

  glowContainer1: {
    position: 'absolute',
  },
  glowContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  first: {
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor: 'pink',
    borderRadius: 100,
  },
});
