import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Notifications from 'expo-notifications'


//Solicita permissoes de notificacao ao iniciar o app
Notifications.requestPermissionsAsync();

//Define como as notificacoes devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () =>({

    //Mostrar o alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //Reproduz som ao receber notificacao
    shouldPlaySound: false,

    //numero de notificacoes no icone do app
    shouldSetBadge: false
  })
})

export default function App() {

  //Funcao para lidar com a chamada de notificacao
  const HandleCallNotifications = async () =>{
    //Obtem status da permissao
    const{status} = await Notifications.getPermissionsAsync()

    //Verifica se o usuario concedeu permissao
    if(status !== 'granted'){
      alert('Voce nao deixou as notificacoes ativas')
      return;
    }
    

    //Agenda uma notificacao
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao Senai",
        body: "Notificacao recebida.",
      },
      trigger: null
    })
  }



  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={{width: '80%', height:50, backgroundColor:'red', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}
      onPress={HandleCallNotifications}
      >
        <Text style={{fontSize: 24, color: '#fff', fontWeight: 'bold'}}>Clique aqui</Text>
      </TouchableOpacity>
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
});
