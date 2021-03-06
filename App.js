import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TextInputComponent } from 'react-native';

export default function App() {

  const [name, setName] = useState('Riju');
  const [age, setAge] = useState(8);

  return (

    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder='Search'
        onChangeText={(val) => setName(val)} />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='Search'
        onChangeText={(val) => setAge(val)} />
      <Text>name: {name}, age: {age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },

});
