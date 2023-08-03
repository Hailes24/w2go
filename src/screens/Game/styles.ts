import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 50,
    justifyContent: 'space-between'
  },
  logo: {
    width: 311,
    height: 140,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 20
  },
  rigth: {
    width: 20,
    height: 20
  },
  headerComp: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttom :{
    width: '40%', 
    marginBottom: 6, 
    marginRight: 2,
    marginLeft: 4,
    //marginTop: 50,

    height: 46,
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
  },
  group: { 
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 25,
    marginLeft: 45
    //width: '311'
    //justifyContent: 'space-between'
  }
});