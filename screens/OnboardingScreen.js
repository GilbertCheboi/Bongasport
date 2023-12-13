import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {

  const navigation =useNavigation();
  return (
    <SafeAreaView style = {styles.onboardingScreen}>
      <Text style = {styles.welcome}>Welcome to FunZone</Text>
      <TouchableOpacity
        style={styles.button}
        onPress ={ () => navigation.navigate('login')}
      >
        <Text>Get started with FunZone</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    onboardingScreen: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#286086',
      flex: 1,
      justifyContent: 'space-around',
    //   marginBottom: 20,
    //   width: '100%',e
      paddingVertical: 15,
    },
    welcome:{
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: 24,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#f79807",
        padding: 10,
        width: 200,
        // position: 'absolute',
      },
})