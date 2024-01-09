import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    fontSize: windowHeight * 0.02,
    color: colors.pale,
  },
});
