import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import casual from '../Tela/assets/casual_dog.png';
import google from '../Tela/assets/Google.png'

export default function App() {
  return (
    <View style={styles.container}>

      <Image 
        source={casual}
        style={styles.dog}
      />

      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.acesso}>
        <Image
          source={google}
          style={styles.google}
        />
        <Text style={styles.text}>Como deseja acessar?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.opcoes}>
        <Text>Outras opções</Text>
      </TouchableOpacity>
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
  acesso: {
    marginTop: 30,
    backgroundColor: '#14c871',
    width: "80%",
    height: "8%",
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10
  },
  opcoes: {
    marginTop: 30,
    width: "80%",
    height: "8%",
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#14c871',
    borderWidth: 2,
  },
  title: {
    paddingTop: 30,
    fontSize: 45,
  },
  subtitle: {
    fontSize: 15,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  google: {
    backgroundColor: '#fff',
    width: "15%",
    height: "60%",
    resizeMode: 'contain',
    marginLeft: 15,
    marginRight: 25,
    borderRadius: 5
  },
  dog: {
    width: "80%",
    resizeMode: 'contain',
  }
});
