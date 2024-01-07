import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    borderColor: colors.purple,
    borderWidth: 1,
    backgroundColor: 'transparent',
    elevation: 5,
    borderRadius: 15,
    width: windowWidth * 0.42,
    height: windowHeight * 0.2,
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.02,
    marginHorizontal: windowWidth * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    width: windowWidth * 0.17,
    height: windowWidth * 0.17,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 0.02,
    borderWidth: 1.5,
  },

  text: {
    fontSize: windowHeight * 0.02,
    color: colors.white,
    fontWeight: '400',
    textAlign: 'center',
  },
});
