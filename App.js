import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import Start from './screens/Start';
import Final from './screens/Final';

export default function App() {
  //initialize name and number
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [chosenNumber, setChosenNumber] = useState(
    () => Math.floor(Math.random() * 10) + 1020
  );
  const [screen, setScreen] = useState('start');
  const [guessCountLeft, setGuessCountLeft] = useState(3);
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState("");

  const resetGame = () => {
      setName('');
      setNumber('');
      setGuessCountLeft(3);
      setChosenNumber( Math.floor(Math.random() * 10) + 1020)
      setDisabled(false);
      setScreen('start');
  }

  return (
    <View style={styles.container}>
      {screen === 'start'? 
          <Start 
            name={name} 
            guessNumber={number}
            setGuessNumber={setNumber}
            chosenNumber={chosenNumber}
            setChosenNumber={setChosenNumber}
            countLeft={guessCountLeft}
            guessDisabled={disabled}
            success={success}
            setSuccess={setSuccess}
            screen={setScreen}/> 
    
          : <Final
          chosenNumber={chosenNumber}
          success={success}
              onReset={resetGame}/>}
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

  input:{
    color:"purple",
  },
});
