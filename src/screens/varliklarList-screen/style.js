import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: windowHeight * 0.01,
  },
  listContainer: {
    flex: 1,

    paddingBottom: windowHeight * 0.06,
  },
});
