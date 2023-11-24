import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth * 1,
    maxHeight: windowHeight * 0.06,
    marginTop: windowHeight * 0.06,
    paddingHorizontal: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.4,
    height: windowHeight * 0.03,
    alignItems: 'center',
    marginTop: windowHeight * 0.001,
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
    fontSize: windowHeight * 0.015,
    color: 'white',
    fontWeight: '300',
    marginLeft: windowWidth * 0.02,
  },
  informContainer: {
    width: windowWidth,
    maxHeight: windowHeight * 0.1,
    flexDirection: 'row',
    flex: 2,
  },
  inform: {
    flex: 1,
    marginHorizontal: windowWidth * 0.04,
  },
});
