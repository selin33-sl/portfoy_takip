import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  imageStyle: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: windowWidth * 1,
    padding: windowWidth * 0.02,
    justifyContent: 'space-between',
  },
  pieChart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: windowHeight * 0.02,
    color: colors.pale,
  },
  listContainer: {
    flex: 1,
    width: windowWidth * 0.92,
  },
});
