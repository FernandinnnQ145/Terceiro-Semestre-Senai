import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

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
},[count])
  return (
    <View style={styles.container}>
      <View style={styles.bloquinho}>

      
      <Text>Contador: {count}</Text>


      <TouchableOpacity onPress={increment} style={styles.increment}>

        <Text >Incrementar</Text>

      </TouchableOpacity>


      <TouchableOpacity  onPress={decrement}  style={styles.decrement}>

        <Text>Decrementar</Text>

      </TouchableOpacity>

      

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloquinho: {
    width: '60%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 10

  },
  increment: {
    backgroundColor: 'green',
    marginBottom: 40,
    marginTop: 40,
    alignItems: 'center',
    width: '50%',
    height: 30
  },
  decrement: {
    backgroundColor: 'red',
    width: '50%',
    height: 30,
    alignItems: 'center'

  }

});
