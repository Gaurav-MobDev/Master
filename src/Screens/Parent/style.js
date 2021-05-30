import {StyleSheet, Dimensions} from 'react-native';

const Style = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height - 80,
    alignItems: 'center',
  },
  flatList: {
    padding: 8,
    height: '100%',
  },
});

export default Style;
