import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <Text>Focus Subject {focusSubject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
