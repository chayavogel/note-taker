import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [text, setText] = useState<string>("");

  const saveNote = async () => {
    await AsyncStorage.setItem('note', text)
  }

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <StatusBar style="auto" />
      <TextInput 
        multiline={true}
        style={styles.TextInput}
        value={text}
        onChangeText={setText}
      />
      <Button 
        title="Save Note"
        onPress={saveNote}
      />
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
  TextInput: {
    backgroundColor: "#ffb70342",
    width: "100%",
    height: 200,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  } 
});
