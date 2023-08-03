
import { View, Text, ColorValue } from 'react-native';
import { styles } from './styles';
import { THEME } from '../../theme';


interface props {
  label: string;
  value: string;
  colorValue?: ColorValue
}

export function EventeInf({label, value, colorValue = THEME.COLORS.BACKGROUND_900} : props) {
 
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, {color: colorValue}]} >{value}</Text>
    </View>
  );
}