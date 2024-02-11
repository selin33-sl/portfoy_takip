import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: colors.green,
    marginHorizontal: windowWidth * 0.01,
  },
  text: {
    fontSize: windowHeight * 0.018,
    color: '#ffffff',
  },
});
