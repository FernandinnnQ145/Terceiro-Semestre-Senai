import { StatusBar } from 'expo-status-bar';
import { Image,Button ,StyleSheet, Text,TextInput ,View, Alert, TouchableOpacity } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>

    <Image
     style={styles.image}
     source={{
       uri: 'https://ltecnologia.com.br/blog/wp-content/uploads/2015/02/helloworld.png',
     }}
    />

      <Text style={styles.text}>Hello Word</Text>


    <TextInput
    style={styles.input}
    defaultValue='exemplo de input'
    />

    <TouchableOpacity style={styles.btn}>
     <Text style={styles.textButton}>Botao</Text>
    </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'

  },
  text: {
    fontSize: 24,
    color: 'white',
    textTransform: 'capitalize'

  },
  textButton: {
    fontSize: 24,
    color: 'black',
    textTransform: 'capitalize'

  },
  image: {
    width: '50%',
    height: '15%',
  },
  btn: {
    width: '90%',
    height: 40,
    backgroundColor: 'orange',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
  
});
