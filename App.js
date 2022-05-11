import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#490527', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require(`./src/assets/images/background.png`)}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  },
});
