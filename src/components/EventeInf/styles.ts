import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';


export const styles = StyleSheet.create({
  container: {
    width: '49%',
    marginBottom: 6, 
    marginRight: 2,
    //marginLeft: 5, 
    paddingLeft: 10,
    
    backgroundColor: '#fffaf4',
    borderColor: '#2c92c8',
    borderRadius: 8,
    //borderWidth: 1,
    borderTopWidth: 2, 
  },
  label: {
    color: THEME.COLORS.BACKGROUND_800,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 2
  },
  value: {
    color: THEME.COLORS.BACKGROUND_900,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD 
  }
})