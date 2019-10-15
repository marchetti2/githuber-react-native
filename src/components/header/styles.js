import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors, metrics} from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.white,
  },
  left: {
    width: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darker,
  },
  right: {
    width: 16,
    color: colors.darker,
  },
  icon: {
    color: colors.darker,
  },
});

export default styles;
