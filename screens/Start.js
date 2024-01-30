import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CheckBox from "../components/CheckBox";
import Color from "../src/Color";
import Game from "./Game";
import Card from "../components/Card";
import Input from "../components/Input";

export default function Start({
  name,
  guessNumber,
  setGuessNumber,
  countLeft,
  guessDisabled,
  screen,
  chosenNumber,
  setChosenNumber,
  success,
  setSuccess,
}) {
  const [userName, setUserName] = useState(name);
  const [nameError, setNameError] = useState("");

  const [number, setNumber] = useState(guessNumber);
  const [numberError, setNumberError] = useState("");

  const [isCheckedBoxSelected, setIsCheckedBoxSelected] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [hint, setHint] = useState("");
  const [guessCountLeft, setGuessCountLeft] = useState(countLeft);
  const [disabled, setDisabled] = useState(guessDisabled);

  const validateUserInput = () => {
    let isValid = true;
    setNameError("");
    setNumberError("");

    if (userName.length < 1 || !isNaN(userName)) {
      setNameError("Please enter a valid name");
      isValid = false;
    }

    if (
      isNaN(number) ||
      !(parseInt(number) >= 1020 && parseInt(number) <= 1029)
    ) {
      setNumberError("Please enter a valid number");
      isValid = false;
    }

    return isValid;
  };

  const handleReset = () => {
    setUserName("");
    setNameError("");
    setNumber("");
    setNumberError("");
    setChosenNumber("");
    setIsCheckedBoxSelected(false);
  };

  const handleStart = () => {
    if (validateUserInput()) {
      handleGame(userName, number);
    }
  };

  const handleGame = (name, number) => {
    setUserName(name);
    setNumber(number);
    setGuessNumber(number);

    setChosenNumber(1023)
    if (parseInt(number) === chosenNumber) {
      setSuccess(true);
    } else {
      setSuccess(false);
      setHint(
        parseInt(number) > chosenNumber ? "Guess Lower!" : "Guess Higher!"
      );
    }

    setGuessCountLeft(guessCountLeft - 1);
    if (guessCountLeft === 1) {
      setDisabled(true);
    }

    setIsModalVisible(true);
  };

  return (
    <Color>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Guess My Number</Text>

        <Card>
          <Input
            label="Name"
            value={userName}
            onChangeText={(data) => setUserName(data)}
            error={nameError}
          />
          <Input
            label="Enter a Number"
            value={number}
            onChangeText={(data) => setNumber(data)}
            error={numberError}
          />
          <CheckBox
            label="I am not a robot"
            checked={isCheckedBoxSelected}
            onChange={setIsCheckedBoxSelected}
          />

          <View style={styles.buttonsContainer}>
            <Button color="red" title="Reset" onPress={handleReset} />
            <Button
              color="blue"
              title="Confirm"
              disabled={!isCheckedBoxSelected}
              onPress={handleStart}
            />
          </View>
        </Card>

        <Game
          name={userName}
          guessNumber={number}
          success={success}
          hint={hint}
          guessCountLeft={guessCountLeft}
          setCheckBox={setIsCheckedBoxSelected}
          tryAgainDisabled={disabled}
          gameScreen={screen}
          modalVisible={isModalVisible}
          setModalVisible={setIsModalVisible}
        />
      </SafeAreaView>
    </Color>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "purple",
    fontSize: 24,
    marginBottom: "10%",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: "10%",
  },
});
