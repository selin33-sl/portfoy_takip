import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  cartContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.06,
    backgroundColor: colors.greyLight,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: windowHeight * 0.01,
    padding: windowWidth * 0.02,
    justifyContent: 'center',
  },
  cartText: {
    fontSize: windowHeight * 0.02,
    color: colors.black,
  },
});
