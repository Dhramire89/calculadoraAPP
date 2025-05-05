import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorAppButton from "@/components/Calculatorbutton";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLastNumber,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateSubResult,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.CalculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variants="h1">{formula} </ThemeText>

        {formula === prevNumber ? (
          <ThemeText variants="h2"> </ThemeText>
        ) : (
          <ThemeText variants="h2">{prevNumber} </ThemeText>
        )}
      </View>
      {/* Botones primer fila */}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="C"
          blackText
          onPress={() => clean()}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="+/-"
          blackText
          onPress={() => toggleSign()}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="del"
          blackText
          onPress={() => deleteLastNumber()}
        />
        <CalculatorAppButton
          color={Colors.orange}
          label="÷"
          onPress={() => divideOperation()}
        />
      </View>
      {/* Botones segunda fila */}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="7"
          blackText
          onPress={() => buildNumber("7")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="8"
          blackText
          onPress={() => buildNumber("8")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="9"
          blackText
          onPress={() => buildNumber("9")}
        />
        <CalculatorAppButton
          color={Colors.orange}
          label="X"
          onPress={() => multiplyOperation()}
        />
      </View>
      {/* Botones tercera fila */}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="4"
          blackText
          onPress={() => buildNumber("4")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="5"
          blackText
          onPress={() => buildNumber("5")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="6"
          blackText
          onPress={() => buildNumber("6")}
        />
        <CalculatorAppButton
          color={Colors.orange}
          label="-"
          onPress={() => subtractOperation()}
        />
      </View>
      {}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="1"
          blackText
          onPress={() => buildNumber("1")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="2"
          blackText
          onPress={() => buildNumber("2")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="3"
          blackText
          onPress={() => buildNumber("3")}
        />
        <CalculatorAppButton
          color={Colors.orange}
          label="+"
          onPress={() => addOperation()}
        />
      </View>
      {/* Botones cuarta fila */}
      <View style={globalStyles.row}>
        <CalculatorAppButton
          color={Colors.lightGray}
          label="0"
          doblesize
          blackText
          onPress={() => buildNumber("0")}
        />
        <CalculatorAppButton
          color={Colors.lightGray}
          label="."
          blackText
          onPress={() => buildNumber(".")}
        />

        <CalculatorAppButton
          color={Colors.orange}
          label="="
          onPress={() => calculateResult()}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
