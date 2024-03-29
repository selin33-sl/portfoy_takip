import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },

  optionsContainer: {
    paddingHorizontal: windowWidth * 0.01,
    width: windowWidth * 0.96,
    height: windowHeight * 0.065,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: colors.grey,
    elevation: 10,
  },
  elipsContainer: {
    width: windowWidth,
    height: windowHeight * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // maxHeight: windowHeight * 0.32,
    height: 'auto',
    width: windowWidth,
    paddingBottom: windowHeight * 0.08,
  },
});
