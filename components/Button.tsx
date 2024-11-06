import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ text, colorText, colorBack, onPress, }: { text: string; colorText: string; colorBack: string; onPress: () => void; }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colorBack }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: colorText }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 128,
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'semibold',
  },
});
