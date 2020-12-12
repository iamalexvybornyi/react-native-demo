import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("name");
  const [age, setAge] = useState(40);

  const clickHandler = () => {
    setAge(45);
  };

  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter age: </Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder="e.g. 30"
        onChangeText={(value) => setAge(value)}
      />

      <Text>The name is {name} and the age is {age}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Update age" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
