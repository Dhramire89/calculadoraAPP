import CalculatorApp from "@/app";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  //Contenedor Principal
  CalculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  //Resultado Principal
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    fontWeight: 400,
  },
  //Resultado Secundario
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: 300,
  },
  //Botones
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: "center",
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  buttonText: {
    color: Colors.textPrimary,
    fontSize: 30,
    textAlign: "center",
    padding: 10,
    fontWeight: 400,
    fontFamily: "SpaceMono",
  },
});
