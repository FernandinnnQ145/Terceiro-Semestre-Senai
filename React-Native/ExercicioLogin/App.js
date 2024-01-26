import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, TextInput, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.iconeLogin}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
        }}
      />

      <Text style={styles.textLogin}>Faça seu login</Text>

      <Text style={styles.textInput}>Email</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite seu email'
      />

      <Text style={styles.textInput}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.textCadastrar}>Nao possui cadastro?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 87,
  },
  textLogin: {
    fontSize: 33,
    color: 'white'
  },
  iconeLogin: {
    width: '50%',
    height: '20%',
    marginBottom: 62
  },
  textInput: {
    fontSize: 15,
    marginTop: 40,
    marginRight: '70%',
    color: 'white',

  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4

  },
  btn:{
    width: '80%',
    height: 30,
    backgroundColor: 'green',
    marginTop: 52,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: 'white'
  },
  textCadastrar: {
    color: '#0000FF',
    fontSize: 11
  }
});
