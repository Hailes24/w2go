import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.TEXT,
    borderRadius: 8,
    width: 311,
    marginTop: 20,
    paddingTop: 10,
    marginLeft: 25
  },
  group: { 
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'space-between'
  },
  buttom :{
    width: '48%', 
    marginBottom: 6, 
    marginRight: 2,
    marginLeft: 4,
    //marginTop: 50,

    height: 36,
    borderRadius: 6,
    backgroundColor: '#166fba', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttomTitle: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 8
  }
});