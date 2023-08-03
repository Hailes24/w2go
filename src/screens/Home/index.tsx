
import React, { useEffect, useState } from "react";
import { View, Image, FlatList, TextInput, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logImg } from "../../assets/logo-nlw-esports.png";
import { Heading } from '../../components/Heading';
import { GameCard, gameCardProps } from '../../components/GameCard';
import { GAMES } from "../../utils/games";
import { styles } from './styles';
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import { MagnifyingGlass } from "phosphor-react-native";
import { THEME } from "../../theme";

export function Home() {

  const [games, setGames] = useState<gameCardProps[]>([])
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<gameCardProps[]>([]);
  //const [masterData, setMasterData] = useState([]);
  const navigation = useNavigation()

  useEffect(() => {
    setFilteredData(GAMES);
    setGames(GAMES);
    /* fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredData(responseJson);
        setMasterData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      }); */
  }, []);

  function ItemView(item: gameCardProps) {
    return (
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.id}
        {' - '}
        {item.name.toUpperCase()}
      </Text>
    );
  };

  function getItem(item: gameCardProps) {
    alert('Id : ' + item.id + '\n\nTitulo : ' + item.name + '\n\nData: ' + item.data);
  }

  function searchFilter(text: string) {
    if (text) {
      const newData = games.filter(
        function (item) {
          if (item.name) {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
        });
      setFilteredData(newData);
    } else {
      setFilteredData(games);
    }
    setSearch(text);
  };

  function handleOpenGame({ id, name, ads, cover, data }: gameCardProps) {
    navigation.navigate('game', { id, name, ads, cover, data })
  }

  /*   useEffect(() => {
      fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
    }, []); */

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.conteinerBusca}>
          <MagnifyingGlass style={{ marginRight: 8 }} color='#fffaf4' size={30}></MagnifyingGlass>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilter(text)}
            value={search}
            //underlineColorAndroid="transparent"
            placeholder="Procure Aqui"
            placeholderTextColor={THEME.COLORS.TEXT}
          />
        </View>

        <Image source={logImg} defaultSource={logImg} style={styles.logo} />
        <Heading tiite='Encontre o Evento' subtitle='Que mais lhe desperte interece...' />
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={function () { handleOpenGame(item) }
              } />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />

      </SafeAreaView>
    </Background>
  );
}