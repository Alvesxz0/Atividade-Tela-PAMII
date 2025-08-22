import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './pages/Tela1'
import Tela2 from './pages/Tela2'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela1">
        <Stack.Screen name="tela1" component={Tela1} options={{headerShown: false}} />
        <Stack.Screen name="tela2" component={Tela2} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
