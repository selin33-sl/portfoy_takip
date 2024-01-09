import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth,
    marginTop: windowHeight * 0.05,
  },

  text: {
    fontSize: windowHeight * 0.02,
    color: 'white',
  },
  listContainer: {
    padding: windowWidth * 0.02,
    // marginBottom: windowHeight * 0.01,
    // backgroundColor: 'red'
  },
});
