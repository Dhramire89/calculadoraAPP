import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorAppButton from "@/components/Calculatorbutton";
import { Colors } from "@/constants/Colors";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.CalculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variants="h1">20 x 20 </ThemeText>
        <ThemeText variants="h2">400 </ThemeText>
      </View>
      {/* Botones primer fila */}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="C"
          blackText
          onPress={() => console.log("C")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="+/-"
          blackText
          onPress={() => console.log("+/-")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="del"
          blackText
          onPress={() => console.log("del")}
        />
        <CalculatorAppButton
          color={Colors.orange}
          label="÷"
          onPress={() => console.log("÷")}
        />
      </View>
      {/* Botones segunda fila */}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="7"
          blackText
          onPress={() => console.log("7")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="8"
          blackText
          onPress={() => console.log("8")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="9"
          blackText
          onPress={() => console.log("9")}
        />
        <CalculatorAppButton
          color={Colors.orange}
          label="X"
          onPress={() => console.log("X")}
        />
      </View>
      {/* Botones tercera fila */}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="4"
          blackText
          onPress={() => console.log("4")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="5"
          blackText
          onPress={() => console.log("5")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="6"
          blackText
          onPress={() => console.log("6")}
        />
        <CalculatorAppButton
          color={Colors.orange}
          label="-"
          onPress={() => console.log("-")}
        />
      </View>
      {}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="1"
          blackText
          onPress={() => console.log("1")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="2"
          blackText
          onPress={() => console.log("2")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="3"
          blackText
          onPress={() => console.log("3")}
        />
        <CalculatorAppButton
          color={Colors.orange}
          label="+"
          onPress={() => console.log("÷")}
        />
      </View>
      {/* Botones cuarta fila */}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="0"
          doblesize
          blackText
          onPress={() => console.log("0")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="."
          blackText
          onPress={() => console.log(".")}
        />

        <CalculatorAppButton
          color={Colors.orange}
          label="="
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
