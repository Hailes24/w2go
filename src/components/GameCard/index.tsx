 
import { TouchableOpacityProps, TouchableOpacity, ImageBackground, ImageSourcePropType, Text} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../../src/theme";
import { styles } from './styles';

  
export interface gameCardProps{
    id: number;
    name: string,
    ads: string,
    cover: ImageSourcePropType,
    data: string
}
interface Props extends TouchableOpacityProps{
    data: gameCardProps
}

export function GameCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground style={styles.cover} source={data.cover}>  
            <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}> 
                <Text style={styles.name}>
                    {data.name}
                </Text>
                <Text style={styles.ads}>
                    {data.ads} interessados
                </Text>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>  
  );
}