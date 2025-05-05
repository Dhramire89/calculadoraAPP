import { useEffect, useRef, useState } from "react";

enum Operator {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "÷",
}
export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");
  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFourmulapart = formula.split(" ").at(0);
      setFormula(`${firstFourmulapart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  // calcular el resultado
  useEffect(() => {
    // calcular el SubResultado
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  //limpiar el resultado
  const clean = () => {
    setFormula("0");
    setNumber("0");
    setPrevNumber("0");
    lastOperation.current = undefined;
  };

  //Cambiar el signo
  const toggleSign = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber("-" + number);
    }
  };

  // borrar el ultimo número
  const deleteLastNumber = () => {
    let currentSing = "";
    let temporalNumber = number;
    if (number.includes("-")) {
      currentSing = "-";
      temporalNumber = number.substring(1);
    }
    if (temporalNumber.length > 1) {
      return setNumber(currentSing + temporalNumber.slice(0, -1));
    }
    setNumber("0");
  };

  // guardar el último número y limpiar el número actual
  const setLastNumber = () => {
    calculateSubResult();
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber("0");
  };

  // los signos de la calculadora
  // Division
  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.DIVIDE;
  };
  // Multiplicación
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.MULTIPLY;
  };
  // Sumar
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.ADD;
  };
  // Restar
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.SUBTRACT;
  };

  // calcualar el resultado
  const calculateSubResult = () => {
    const [prev, operator, current] = formula.split(" ");
    const prevNumber = Number(prev);
    const currentNumber = Number(current);

    if (isNaN(currentNumber)) return prevNumber;
    switch (operator) {
      case Operator.ADD:
        return prevNumber + currentNumber;
      case Operator.SUBTRACT:
        return prevNumber - currentNumber;
      case Operator.MULTIPLY:
        return prevNumber * currentNumber;
      case Operator.DIVIDE:
        if (currentNumber === 0) {
          setPrevNumber("0");
          return 0;
        }
        return prevNumber / currentNumber;
      default:
        throw new Error(`Operador no soportado: ${operator}`);
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber("0");
  };

  // construir el número
  const buildNumber = (numberString: string) => {
    // verificar si ya existe un punto decimal
    if (number.includes(".") && numberString === ".") return;

    // ver si el número es 0 y el nuevo número es diferente de 0
    if (number.startsWith("0") || number.startsWith("-0")) {
      // si el número es 0 y el nuevo número es diferente de 0
      if (numberString === ".") {
        return setNumber(number + numberString);
      }
      //Evaluar si es otro cero y no es un punto decimal
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }
      // evaluar si es difeferente de 0, y no hay punto y es el primer número
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }
      // evitar el 0000000.00
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }
    setNumber(number + numberString);
  };

  return {
    //Propiedades
    formula,
    number,
    prevNumber,

    //Funciones
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
  };
};
