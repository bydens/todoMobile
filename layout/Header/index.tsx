import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainHeaderContent}>
        <StyledText>TODO App</StyledText>
        <StyledText>May 24, 2025</StyledText>
      </View>
        <StyledText>Completed: 0/0</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  mainHeaderContent: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  }
});
export default Header;