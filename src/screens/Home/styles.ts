
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center'
  },
  conteinerBusca: {
    flexDirection: 'row-reverse', 
    marginTop: 25,
    marginRight: 25,
    height: 40,
    borderWidth: 2.5,
    borderRadius: 8,
    //paddingLeft: 30,
    //margin: 5,
    borderColor: THEME.COLORS.TEXT,
    color: THEME.COLORS.TEXT,  
    width: 310
  },
  logo: {
    width: 214,
    height: 40,
    marginTop: 74,
    marginBottom: 48
    //,backgroundColor: THEME.COLORS.ALERT
  },
  contentList: {
    paddingStart: 32,
    paddingEnd: 50,
/* 
    alignItems: 'center', 
    marginBottom: 10 */
  },
  textInputStyle: {
    //height: 40,
    //borderWidth: 2,
    //borderRadius: 8,
    paddingLeft: 55,
    //margin: 5,
    //borderColor: THEME.COLORS.TEXT,
    color: THEME.COLORS.TEXT,  
    width: 310
  },
  itemStyle: {
    backgroundColor: '#0066CC',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    color: 'white',
  }
});