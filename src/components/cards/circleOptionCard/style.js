import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth * 0.31,
    height: windowWidth * 0.1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    elevation: 10,
  },

  text: {
    fontSize: windowHeight * 0.015,
    fontWeight: '300',
    color: 'white',
  },
});
