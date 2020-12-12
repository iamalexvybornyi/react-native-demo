import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "John Doe", key: "1" },
    { name: "Alex Wu", key: "2" },
    { name: "Craig Rain", key: "3" },
    { name: "Brian Styles", key: "4" },
    { name: "Mary Very", key: "5" },
    { name: "Lina Ray", key: "6" },
    { name: "Brian Myles", key: "7" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      
      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 40,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
