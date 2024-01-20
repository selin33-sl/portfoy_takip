import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    height: windowHeight * 0.03,
    alignItems: 'center',
    marginTop: windowHeight * 0.005,
  },
  circle: {
    borderRadius: 25,
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    backgroundColor: 'blue',
  },
  textContainer: {
    flexDirection: 'row',
    // marginLeft: windowWidth * 0.02,
  },

  text: {
    fontSize: windowHeight * 0.014,
    color: colors.white,
    fontWeight: '300',
    marginLeft: windowWidth * 0.02,
  },
  informContainer: {
    width: windowWidth,
    height: windowHeight * 0.1,
    maxHeight: windowHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inform: {
    height: windowHeight * 0.1,
  },
});
