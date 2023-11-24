import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
  },

  innerContainer: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth * 0.85,
    marginTop: windowHeight * 0.05,
  },

  text: {
    fontSize: windowHeight * 0.02,
    color: 'white',
  },
});
