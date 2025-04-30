import { Text, Pressable } from "react-native";
import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";

interface CalculatorButtonProps {
  label: string;
  color?: string;
  doblesize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

const Calculatorbutton = ({
  label,
  doblesize = false,
  color = Colors.darkGray,
  blackText = false,
  onPress,
}: CalculatorButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.5 : 1,
        transform: pressed ? [{ scale: 0.95 }] : [],
        width: doblesize ? 180 : 80,
      })}
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Calculatorbutton;
