import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Color from "../src/Color";
import Card from "../components/Card";

const Final = ({ chosenNumber, success, onReset }) => {
  const renderImage = () => {
    if (success) {
      return (
        <Image
          source={{ uri: `https://picsum.photos/id/${chosenNumber}/100/100` }}
          style={styles.image}
        />
      );
    } else {
      return (
        <Image
          source={require("../assets/sad-face.png")}
          style={styles.image}
        />
      );
    }
  };

  const renderButton = () => {
    return <Button color="blue" title="Start Again" onPress={onReset} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Game is Over</Text>
      <Card>
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeader}>Here's your picture</Text>
          {renderImage()}
          {renderButton()}
        </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    color: "darkblue",
    fontSize: 24,
    paddingBottom: "10%",
  },

  cardHeader: {
    color: "darkblue",
    fontSize: 20,
    marginBottom: "10%",
  },

  image: {
    width: 190,
    height: 190,
    alignSelf: "center",
    marginBottom: "10%",
  },

  cardContainer: {
    flexDirection: "column",
    alignSelf: "center",
    marginTop: "10%",
  },
});

export default Final;
