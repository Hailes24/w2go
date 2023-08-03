
import { ImageSourcePropType, View } from 'react-native';
import background from '../../assets/background-galaxy.png';
import { styles } from './styles';
import { ImageBackground } from "react-native";
import { useRoute } from '@react-navigation/native';
import { } from "../../assets/games/evento-01.png";
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    children: React.ReactNode;
}

export function ViewPost() {
    const routes = useRoute()
    const imgPost = routes.params as { id: Number, cover: ImageSourcePropType }

    function getUri(id: Number) {
        switch (id) {
            case 1: return '../../assets/games/evento-01.png';
            case 2: return '../../assets/games/evento-02.png';
            case 3: return '../../assets/games/evento-03.png';
            case 4: return '../../assets/games/evento-04.png';
            case 5: return '../../assets/games/evento-05.png';
            case 6: return '../../assets/games/evento-06.png';
            case 7: return '../../assets/games/evento-07.png';
        }
    }

    return (
            <ImageBackground source={imgPost.cover} defaultSource={{ uri: getUri(imgPost.id)}} style={styles.container} >
            </ImageBackground>
    );
}