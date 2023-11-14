import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  searchBar: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.8,
    borderRadius: 40,
    paddingLeft: windowWidth * 0.03,
    fontSize: windowHeight * 0.02,
    backgroundColor: 'white',
    color: 'black',
  },
  container: {
    justifyContent: 'center',
    minHeight: 48,
    marginHorizontal: windowWidth * 0.02,
  },
  clearIcon: {
    position: 'absolute',
    right: windowWidth * 0.02,
  },
});
