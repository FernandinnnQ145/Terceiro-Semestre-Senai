import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, FlatList, View } from "react-native";
import Person from "./src/components/Person/Person";
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SingleDay_400Regular } from '@expo-google-fonts/single-day';
import Jogos from "./src/components/Jogos/Jogos";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_700Bold,
    SingleDay_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    { id: '1', name: 'Fernando', age: 16 },

  ]

  const jogos = [
    { id: '1', nome: 'GTA', dataLancamento: '16/07/2009', genero: 'Acao' },
    { id: '2', nome: 'Rd2', dataLancamento: '04/02/2019', genero: 'Acao' },
    { id: '3', nome: 'Mk', dataLancamento: '27/09/2023', genero: 'luta' },
  ]

  return (

    <SafeAreaView>
      

      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Person name={item.name} age={item.age} />
        )}
      />


 

      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Jogos nome={item.nome} dataLancamento={item.dataLancamento} genero={item.genero} />
        )}
      />




    </SafeAreaView>

  );
}



