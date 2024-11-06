import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button } from '@/components/Button';
import { useState } from 'react';

export default function HomeScreen() {
  const [currentNumber, setCurrentNumber] = useState<string>('0');
  const [previousNumber, setPreviousNumber] = useState<string>(''); 
  const [operation, setOperation] = useState<string>(''); 
  const [operationHistory, setOperationHistory] = useState<string>(''); 
  
  // Função para adicionar números
  const addNumber = (number: number) => {
    if(currentNumber == '0'){
      setCurrentNumber('');
    }
    setCurrentNumber(prev => prev + number.toString());
  };

  const addPoint = () => {
    setCurrentNumber(prev => prev + '.')
  };

  // Função para selecionar a operação
  const selectOperation = (op: string) => {
    if (currentNumber === '') return; 
    setPreviousNumber(currentNumber);
    setCurrentNumber('');
    setOperation(op); 
    setOperationHistory(`${previousNumber} ${op}`);
  };

  // Função para calcular o resultado
  const calculate = () => {
    if (currentNumber === '' || previousNumber === '') return; 
    let result: number;

    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case 'x':
        result = prev * current;
        break;
      case '÷':
        result = prev / current;
        break;
      case '%':
        result = prev % current;
        break;
      default:
        return;
    }

    setCurrentNumber(result.toString()); 
    setOperationHistory(`${operationHistory} ${currentNumber}`);
    setPreviousNumber('');
    setOperation('');
  };

  const clear = () => {
    setCurrentNumber('0');
    setPreviousNumber('');
    setOperation('');
    setOperationHistory('');
  };

  return (
    <View style={styles.divPrincipal}>
      <View style={styles.divPrimeira}>
        <Text style={styles.conta}>{operationHistory}</Text>
        <Text style={styles.resultado}>{currentNumber}</Text>
      </View>
      <View style={styles.divSegunda}>
        <View style={styles.linha}>
          <Button text='AC' colorText='white' colorBack='#C18DB2FF' onPress={clear} />
          <Button text='+/-' colorText='white' colorBack='#C18DB2FF' onPress={() => selectOperation('+/-')} />
          <Button text='%' colorText='white' colorBack='#C18DB2FF' onPress={() => selectOperation('%')} />
          <Button text='÷' colorText='white' colorBack='#4B4B4BFF' onPress={() => selectOperation('÷')} />
        </View>
        <View style={styles.linha}>
          <Button text='7' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(7)} />
          <Button text='8' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(8)} />
          <Button text='9' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(9)} />
          <Button text='x' colorText='white' colorBack='#4B4B4BFF' onPress={() => selectOperation('x')} />
        </View>
        <View style={styles.linha}>
          <Button text='4' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(4)} />
          <Button text='5' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(5)} />
          <Button text='6' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(6)} />
          <Button text='-' colorText='white' colorBack='#4B4B4BFF' onPress={() => selectOperation('-')} />
        </View>
        <View style={styles.linha}>
          <Button text='1' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(1)} />
          <Button text='2' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(2)} />
          <Button text='3' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(3)} />
          <Button text='+' colorText='white' colorBack='#4B4B4BFF' onPress={() => selectOperation('+')} />
        </View>
        <View style={styles.linha}>
          <Button text='📱' colorText='white' colorBack='#69425AFF' onPress={() => selectOperation('sla')} />
          <Button text='0' colorText='white' colorBack='#69425AFF' onPress={() => addNumber(0)} />
          <Button text='.' colorText='white' colorBack='#69425AFF' onPress={() => addPoint()} />
          <Button text='=' colorText='white' colorBack='#4B4B4BFF' onPress={calculate} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divPrincipal: {
    display: 'flex',
    backgroundColor: "#C18DB2FF",
    flex: 1
  },
  divPrimeira: {
    backgroundColor: "#C18DB2FF",
    flex: 3,
    padding: 36,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "100%"
  },
  divSegunda: {
    backgroundColor: "#D3D3D3FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderWidth: 0,
    elevation: 5,
    flex: 7,
    borderStartStartRadius: 48,
    borderStartEndRadius: 48,
    padding: 24,
    width: "100%",
    justifyContent: "center",
    gap: 25
  },
  resultado: {
    fontSize: 48,
    color: "white",
    marginRight: 12
  },
  conta: {
    fontSize: 32,
    color: "#7B5877FF",
    marginRight: 12
  },
  linha: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  }
});
