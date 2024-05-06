import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { PaperProvider } from "react-native-paper";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("test ");
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <Focus addSubject={setCurrentSubject} />
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={() => {}}
            clearSubject={() => setCurrentSubject(null)}
          />
        )}
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
