
import { TouchableOpacity, View, Text } from 'react-native';

import { HandEye, Check } from 'phosphor-react-native';

import { styles } from './styles';
import { EventeInf } from '../EventeInf';
import { GAMES } from '../../utils/games';
import { THEME } from '../../theme';

interface propMain {
    id: string,
    nome: string
}



export function EventCard({ id, nome }: propMain) {
    var evnto = GAMES.filter(it => it.id === Number(id))[0] ?? {};

    function getColor(ads: string) {
        return Number(ads) < 10 ? THEME.COLORS.ALERT : THEME.COLORS.SUCCESS;
    }

    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <EventeInf label='Tema' value={evnto.name} />
                <EventeInf label='Interassados' value={evnto.ads} colorValue={ Number(evnto.ads) < 10 ? THEME.COLORS.ALERT : THEME.COLORS.SUCCESS } />
            </View>
            <View style={styles.group}>
                <EventeInf label='Data' value={evnto.data} />
                <EventeInf label='Preço' value='150.000,00 AOA' />
            </View>
            <View style={styles.group}>
                <EventeInf label='Local' value='50535 Ledner Locks' />
                <EventeInf label='Contactos' value='976-955-9752' />
            </View> 
        </View>
    );
}

