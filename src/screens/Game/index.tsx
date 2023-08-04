
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity, View, Image, Text, ImageSourcePropType } from 'react-native';
import { GaneParmsProps } from "../../@types/navigation";
import { Background } from '../../components/Background';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";
import { EventCard } from "../../components/EventCard";
import { HandFist, ImageSquare } from "phosphor-react-native";



export function Game() {
    const routes = useRoute()
    const game = routes.params as GaneParmsProps
    const navigation = useNavigation();
    //console.log(game.)

    function handlegoback() {
        navigation.goBack();
    }
  
    function handleOpenPost({id ,cover}: {id: Number, cover: ImageSourcePropType}): void {
        navigation.navigate('viewPost', {id: id, cover: cover});
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handlegoback}>
                        <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={25} />
                    </TouchableOpacity>
                    {/* <Image source={logoImg} style={styles.logo}/> */}
                </View>{/* 
                <View style={styles.rigth}>
                </View> */}
                <TouchableOpacity onPress={() => handleOpenPost({id: game.id, cover: game.cover})}>
                    <Image source={game.cover} style={styles.logo} resizeMode="cover" />
                </TouchableOpacity>
                <Heading tiite={game.name} subtitle={game.ads + ' Pessoas com interece'} style={styles.headerComp} />
                <EventCard id={game.id.toString()} nome={game.name}></EventCard>

                <View style={styles.group}>
                    <TouchableOpacity style={styles.buttom}>
                        <HandFist color='#fffaf4' size={20}></HandFist>
                        <Text style={styles.buttomTitle} >Interessante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttom} onPress={() => handleOpenPost({id: game.id, cover: game.cover})}>
                        <ImageSquare color='#fffaf4' size={20}></ImageSquare>
                        <Text style={styles.buttomTitle} >Ver Panfleto</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Background>
    );
}