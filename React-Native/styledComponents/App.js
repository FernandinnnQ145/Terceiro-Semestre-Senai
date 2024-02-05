import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { BtnIncrement } from './src/components/BtnIncrement/BtnIncrement';
import { BtnDecrement } from './src/components/BtnDecrement/BtnDecrement';
import { TitleCount } from './src/components/Title/TitleCount/TitleCount';
import { useFonts, SingleDay_400Regular } from '@expo-google-fonts/single-day';
import { Btn } from './src/components/Btn/Btn';


export default function App() {

  //Hook de state
  const [count, setCount] = useState(0)

  //funcao para incremento
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }


  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])


  let [fontsLoaded, fontError] = useFonts({
    SingleDay_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Container>
      


        <TitleCount>Contador: {count}</TitleCount>
        {/* <Text>Contador: {count}</Text> */}

        <Btn>
        <BtnIncrement onPresss={increment}>

          <Text >Incrementar</Text>

        </BtnIncrement>


        <BtnDecrement onPress={decrement}>

          <Text>Decrementar</Text>

        </BtnDecrement>

        </Btn>
      
      <StatusBar style="auto" />
    </Container>
  );
}

