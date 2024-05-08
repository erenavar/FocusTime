import { Text, View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.title}>We haven't focused on anything yet</Text>;
  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FocusHistory</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.lg,
    color: colors.white,
    paddingTop: spacing.sm,
    alignSelf: "center",
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    textAlign: "center",
    fontWeight: "bold",
  },
});
