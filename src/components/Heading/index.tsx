
 
import { View , Text, ViewProps } from 'react-native'; 
import { styles } from './styles';

interface Props extends ViewProps{
    tiite: string,
    subtitle: string
}

export function Heading({tiite, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {tiite}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}