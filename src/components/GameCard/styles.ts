
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 24, 
  },
  cover: {
    width: 240,
    height: 320, 
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: THEME.COLORS.TEXT,
    borderWidth: 3
  },
  footer: {
    //width: '100%',
    height: 102,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 215
  },
  name: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD 
  },
  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR 
  }
});