import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('Riju');
  const [person, setPerson] = useState({ name: 'mario', age: 40 });


  const clickHandler = () => {

    if (name == 'Riju') {
      setName('Sayantan')
      setPerson({ name: 'mario', age: 40 })
    } else {
      setName('Riju')
      setPerson({ name: 'luigi', age: 45 })
    }
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age} </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={clickHandler} />
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,

  },
  inputStyle: {
    width: 50,
    borderWidth: 2,
    borderColor: 'red'
  }
});

