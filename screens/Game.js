import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Color from "../src/Color";
import Card from "../components/Card";

export default function Game({
  name,
  guessNumber,
  success,
  hint,
  guessCountLeft,
  gameScreen,
  setCheckBox,
  tryAgainDisabled,
  modalVisible,
  setModalVisible,
}) {
  const handleWin = () => {
    setModalVisible("false");
    gameScreen("final");
  };

  const handleLost = () => {
    setModalVisible("false");
    gameScreen("final");
  };

  const handleTryAgain = () => {
    setCheckBox(false);
    setModalVisible("false");
  };

  return (
    <Modal visible={modalVisible}>
      <Color>
        <SafeAreaView style={styles.container}>
          <Card>
            {success === true ? (
              <>
                <Text style={styles.content}>Congrats {name}! Yon won!</Text>
                <View style={styles.buttonsContainer}>
                  <Button color="blue" title="Thank you!" onPress={handleWin} />
                </View>
              </>
            ) : (
              <>
                <Text style={styles.content}>Hello {name}</Text>
                <Text style={styles.content}>
                  You have chosen {guessNumber}
                </Text>
                <Text style={styles.content}>That's not my number</Text>
                <Text style={styles.content}>{hint}</Text>
                <Text style={styles.content}>
                  You have {guessCountLeft} attempts left!
                </Text>
                <View style={styles.buttonsContainer}>
                  <Button color="red" title="I am done" onPress={handleLost} />
                  <Button
                    color="blue"
                    title="Let Me Guess Again"
                    onPress={handleTryAgain}
                    disabled={tryAgainDisabled}
                  />
                </View>
              </>
            )}
          </Card>
        </SafeAreaView>
      </Color>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    color: "purple",
    fontSize: 18,
    alignSelf: "center",
    justifyContent: "center",
  },

  buttonsContainer: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    marginTop: "10%",
  },
});
