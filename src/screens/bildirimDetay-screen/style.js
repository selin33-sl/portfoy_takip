import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  innerContainer: {
    width: windowWidth * 0.9,
    paddingTop: windowHeight * 0.05,
  },
  text: {
    fontSize: windowHeight * 0.02,
    color: 'white',
  },

  imageContainer: {
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: windowHeight * 0.02,
  },
  image: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
  },
});
