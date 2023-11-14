import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    width: windowWidth * 0.92,
    maxHeight: windowHeight * 0.09,
    marginTop: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.035,
    flexDirection: 'row',
    elevation: 30,
  },
  innerContainer: {},

  row1: {
    alignItems: 'center',

    justifyContent: 'space-between',
    flexDirection: 'row',
    width: windowWidth * 0.75,
    height: windowHeight * 0.04,
  },
  row2: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: windowWidth * 0.75,
    height: windowHeight * 0.04,
  },
  iconContainer: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1: {
    fontSize: windowHeight * 0.02,
    color: 'white',
    fontWeight: '400',
  },
  text2: {
    fontSize: windowHeight * 0.015,
    color: 'white',
    fontWeight: '300',
  },
});
