import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";

export const Focus = () => (
  <View style={styles.container}>
    <TextInput label="Focus Item" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  text: { color: colors.white },
});
