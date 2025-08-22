import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";

export default function Tela2({ navigation }) {
  const [securePassword, setSecurePassword] = useState(false);
  const [Check, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons 
          name="arrow-back" 
          size={25} 
          color="#14C871" 
        />
      </TouchableOpacity>

      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtitle}>com E-mail e senha</Text>

      <Text style={styles.inputTitle}>E-mail</Text>
      <TextInput
        placeholder="Digite seu E-mail" 
        style={styles.input} 
        keyboardType="email-address" 
      />
      <Text style={styles.inputTitle}>Senha</Text>
      <View style={styles.senha}>
        <TextInput 
          placeholder="Digite sua senha" 
          style={styles.inputSenha} 
          secureTextEntry={!securePassword} 
        />
        <TouchableOpacity onPress={() => setSecurePassword(!securePassword)} style={styles.olho}>
          <Ionicons 
            name={securePassword ? "eye" : "eye-off"} 
            size={25} 
            color="#555" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.op}>
        <View style={styles.Checking}>
          <Checkbox 
            value={Check} 
            onValueChange={setCheck} 
            color="#14C871" 
          />
          <Text style={styles.lembrar}>Lembrar senha</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.recuperar}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.acesso}>
          <Text style={styles.acessoText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cadastrar}>
          <Text style={styles.cadastroText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.continue}>
        <View style={styles.riscos} />
        <Text style={styles.text}>Ou continue com</Text>
        <View style={styles.riscos} />
      </View>

      <View style={styles.redes}>
        <TouchableOpacity style={styles.google}>
          <Image 
            source={Google} 
            style={styles.googleImg} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.face}>
          <Image 
            source={Facebook} 
            style={styles.faceImg} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 50
  },
  title: {
    fontSize: 45,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 40
  },
  inputTitle: {
    fontSize: 15,
    marginBottom: 3
  },
  input: {
    backgroundColor: "#F0F8FF",
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    height: 80
  },
  inputSenha: {
    flex: 1,
    padding: 15,
    height: 80
  },
  senha: {
    alignItems: "center",
    backgroundColor: "#F0F8FF",
    borderRadius: 5,
    marginBottom: 40,
    flexDirection: "row"
  },
  op: {
    marginBottom: 40,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  Checking: {
    alignItems: "center",
    flexDirection: "row"
  },
  lembrar: {
    marginLeft: 10,
    fontSize: 15
  },
  recuperar: {
    fontSize: 15
  },
  botoes: {
    justifyContent: "space-between",
    marginBottom: 90,
    flexDirection: "row"
  },
  acesso: {
    flex: 1,
    backgroundColor: "#14C871",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    height: 80,
    marginRight: 10
  },
  acessoText: {
    color: "#fff",
    fontSize: 15,
  },
  cadastrar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    borderColor: "#14C871"
  },
  cadastroText: {
    fontSize: 15,
  },
  riscos: {
    flex: 1,
    height: 1,
    backgroundColor: "#a3a3a3ff"
  },
  continue: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 25
  },
  text: {
    marginHorizontal: 10
  },
  redes: {
    justifyContent: "center",
    flexDirection: "row"
  },
  google: {
    backgroundColor: "#f8f8f8ff",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10
  },
  face: {
    backgroundColor: "#f8f8f8ff",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10
  },
  faceImg: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  googleImg: {
    height: 50,
    width: 50,
    resizeMode: "contain"
  },
  olho: {
    paddingHorizontal: 10
  },
});