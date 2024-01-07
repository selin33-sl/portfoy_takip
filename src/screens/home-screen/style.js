import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageStyle: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: windowHeight * 0.01,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: windowWidth * 1,
    padding: windowWidth * 0.02,
    justifyContent: 'space-between',
  },
  shareContainer: {
    right: 0,
    top: 0,
    width: windowWidth * 0.15,
    height: windowHeight * 0.06,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pieChart: {
    width: 175,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    elevation: 15,
  },
  pieChartContainer: {
    width: windowWidth,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toplamContainer: {
    width: windowWidth,
    height: windowHeight * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toplamText: {
    fontSize: windowHeight * 0.035,
    fontWeight: '400',
    color: 'white',
  },
  optionButton: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: colors.lightLilac,
    borderRadius: 50,
    elevation: 15,
    borderColor: colors.primary2,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  birimText: {
    fontSize: windowHeight * 0.02,
    fontWeight: '700',
    color: colors.primary2,
  },
  listContainer: {
    alignItems: 'center',
    maxHeight: windowHeight * 0.32,
    width: windowWidth,
  },
  optionContainer: {
    width: windowWidth,
    height: windowWidth * 0.1,
    marginTop: windowHeight * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
