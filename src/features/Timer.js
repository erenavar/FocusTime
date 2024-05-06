import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";

export const Timer = ({ focusSubject }) => {
  const [isStart, setIsStart] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStart} onProgress={() => {}} onEnd={() => {}} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStart && (
          <RoundedButton title="start" onPress={() => setIsStart(true)} />
        )}
        {isStart && (
          <RoundedButton title="pause" onPress={() => setIsStart(false)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
