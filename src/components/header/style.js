import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth * 1,
    height: windowHeight * 0.03,
    maxHeight: windowHeight * 0.06,
    marginTop: windowHeight * 0.06,
    paddingHorizontal: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backIcon: {
    color: colors.white,
    position: 'absolute',
    justifyContent: 'flex-start',
  },
  backIconContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: windowHeight * 0.025,
    color: colors.white,
    fontWeight: '300',
  },
  textContainer: {
    position: 'absolute',
    width: windowWidth * 0.8,
    justifyContent: 'center',
  },
});
