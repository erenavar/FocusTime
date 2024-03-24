import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = () => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: { justifyContent: "center" },
  textInput: {
    flex: 1,
    paddingRight: 10,
    marginRight: 10,
  },
  inputContainer: {
    padding: 25,
    justifyContent: "top",
    flexDirection: "row",
  },
});
