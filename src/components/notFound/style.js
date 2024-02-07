import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  text: {
    fontSize: windowHeight * 0.02,
    color: 'grey',
    textAlign: 'center',
    marginVertical: windowWidth * 0.1,
    fontWeight: '300',
  },
});
