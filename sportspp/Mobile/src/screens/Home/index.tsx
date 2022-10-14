import React from 'react';
import { View, Image , FlatList} from 'react-native';
// components
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

// utils
import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item =>item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item} 
          />
        )}
        // show the values in horizontal way
        horizontal 
        // disable scroll indicatore
        showsVerticalScrollIndicator={false}

        contentContainerStyle= {styles.contentList}
      />

    </View>
  );
}