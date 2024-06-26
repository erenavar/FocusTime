import React, { useState } from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import Timing from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStart, setIsStart] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStart(false);
    setProgress(0.1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStart}
          onProgress={(progress) => setProgress(progress)}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ padding: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStart && (
          <RoundedButton title="start" onPress={() => setIsStart(true)} />
        )}
        {isStart && (
          <RoundedButton title="pause" onPress={() => setIsStart(false)} />
        )}
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={55} title="-" onPress={clearSubject} />
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
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    padding: spacing.md,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubjectWrapper: {
    flexDirection: "row",
    marginTop: spacing.xxxl,
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
});
