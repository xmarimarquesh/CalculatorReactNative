import { StyleSheet, View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { Button } from '@/components/Button';
import { useState } from 'react';

export default function HomeScreen() {
  const [operationHistory, setOperationHistory] = useState<string>('0');
  const [operationHistorya, setOperationHistorya] = useState<string>('');
  
  // Função para adicionar números
  const addNumber = (number: number) => {
    setOperationHistory(`${operationHistory}${number.toString()}`);
  };

  // Função para selecionar a operação
  const selectOperation = (op: string) => {
    setOperationHistory(`${operationHistory}${op}`);
  };

  // Função para calcular o resultado
  const calculate = () => {
    let result: number;

    result = eval(operationHistory)
    setOperationHistorya(`${operationHistory}`)
    setOperationHistory(`${result.toString()}`)
  };

  const clear = () => {
    setOperationHistory('0');
    setOperationHistorya('');
  };

  return (
    <View style={styles.divPrincipal}>
      <View style={styles.divPrimeira}>
        <Text style={styles.conta}>{operationHistorya}</Text>
        <Text style={styles.resultado}>{operationHistory}</Text>
      </View>
      <View style={styles.divSegunda}>
        <View style={styles.linha}>
          <Button text='AC' colorText='white' colorBack='#C18DB2FF' onPress={clear} />
          <Button text='+/-' colorText='white' colorBack='#C18DB2FF' onPress={() => selectOperation('+/-')} />
          <Button text='%' colorText='white' colorBack='#C18DB2FF' onPress={() => selectOperation('%')} />
          <Button text='÷' colorText='white' colorBack='#4B4B4BFF' onPress={() => selectOperation('/')} />
        </View>
        <View style={styles.linha}>
          <Button text='7' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(7)} />
          <Button text='8' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(8)} />
          <Button text='9' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(9)} />
          <Button text='x' colorText='white' colorBack='#4B4B4BFF' onPress={() => selectOperation('*')} />
        </View>
        <View style={styles.linha}>
          <Button text='4' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(4)} />
          <Button text='5' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(5)} />
          <Button text='6' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(6)} />
          <Button text='-' colorText='white' colorBack='#4B4B4BFF' onPress={() => selectOperation('-')} />
        </View>
        <View style={styles.linha}>
          <Button text='1' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(1)} />
          <Button text='2' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(2)} />
          <Button text='3' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(3)} />
          <Button text='+' colorText='white' colorBack='#4B4B4BFF' onPress={() => selectOperation('+')} />
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.button}  onPress={() => addNumber(1)}>
            <Image source={require('../assets/images/calculadora.png')}></Image>
          </TouchableOpacity>
          <Button text='0' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(0)} />
          <Button text='.' colorText='white' colorBack='#A35987FF' onPress={() => addNumber(0)} />
          <Button text='=' colorText='white' colorBack='#4B4B4BFF' onPress={() => changeCalculator()} />
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
  button: {
    padding: 10,
    borderRadius: 128,
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    backgroundColor: "#A35987FF"
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
    backgroundColor: "#F4F4F4FF",
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
    marginRight: 12,
    maxWidth: "100%"
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
