import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth * 0.92,
    maxHeight: windowHeight * 0.09,
    marginTop: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    flex: 1,
  },

  iconContainer: {
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: windowHeight * 0.03,
    color: 'white',
    fontWeight: '300',
    marginLeft: windowWidth * 0.05,
    textAlign: 'center',
  },
});
