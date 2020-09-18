import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldtext}>Hello riju</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText} >I am  <Text>Riju</Text> staying in pune.</Text>
        <Text>My father name is Sayantan.</Text>
        <Text>My mother name is Supriya.</Text>
        <Text>I am living with them.</Text>
      </View>
      <StatusBar style="auto" />
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
  textcolour: {
    color: '#339FFF'
  },
  header: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'red',
    padding: 20,
    fontWeight: 'bold',
  }
});

