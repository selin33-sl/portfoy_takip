import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  header: {
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.04,
    alignItems: 'center',
  },
  lineChartContainer: {
    paddingLeft: 20,
    width: windowWidth,
    height: windowHeight,
  },
  headerText: {
    fontSize: windowHeight * 0.05,
    color: colors.white,
    fontWeight: '600',
  },
});
