import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },

  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: windowHeight * 0.02,
    color: colors.pale,
  },
  listContainer: {
    padding: windowWidth * 0.02,
    // marginBottom: windowHeight * 0.01,
    // backgroundColor: 'red'
  },
});
