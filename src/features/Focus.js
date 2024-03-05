import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";

export const Focus = () => {
  useState[(subject, setSubject)] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          label="What would like to focus on?"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  inputContainer: {
    flex: 0.5,
    padding: 25,
    justifyContent: "top",
  },
});
