// CaloriesCalc/index.js
import React, { useState } from 'react';
import { Alert } from 'react-native';
import PickerSelect from 'react-native-picker-select';
import {
  CaloriesCalculatorContainer,
  Title,
  InputLabel,
  Input,
  CalculateButton,
  CalculateButtonText,
  ResultContainer,
  ResultText,
  PickerContainer,
} from './style';

const CaloriesCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('female');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [result, setResult] = useState(null);

  const calculateCalories = () => {
    // Adapte os cálculos conforme necessário para corresponder à lógica desejada
    const bmr =
      gender === 'female'
        ? 655 + 9.6 * parseFloat(weight) + 1.8 * parseFloat(height) - 4.7 * parseFloat(age)
        : 66 + 13.7 * parseFloat(weight) + 5 * parseFloat(height) - 6.8 * parseFloat(age);

    const activityMultipliers = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extremelyActive: 1.9,
    };

    const totalCalories = bmr * activityMultipliers[activityLevel];

    setResult(totalCalories.toFixed(2));
  };

  const clearInputs = () => {
    setAge('');
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <CaloriesCalculatorContainer>
      <Title>Calculadora de Calorias. Vamos calcular sua necessidade energética diária</Title>

      <InputLabel>Idade:</InputLabel>
      <Input value={age} onChangeText={setAge} keyboardType="numeric" placeholder="Insira sua idade" />

      <InputLabel>Peso (kg):</InputLabel>
      <Input value={weight} onChangeText={setWeight} keyboardType="numeric" placeholder="Insira seu peso" />

      <InputLabel>Altura (cm):</InputLabel>
      <Input value={height} onChangeText={setHeight} keyboardType="numeric" placeholder="Insira sua altura" />

      <InputLabel>Gênero:</InputLabel>
      <PickerContainer>
        <PickerSelect
          value={gender}
          onValueChange={(value) => setGender(value)}
          items={[
            { label: 'Feminino', value: 'female' },
            { label: 'Masculino', value: 'male' },
          ]}
          placeholder={{}}
        />
      </PickerContainer>

      <InputLabel>Nível de Atividade:</InputLabel>
      <PickerContainer>
        <PickerSelect
          value={activityLevel}
          onValueChange={(value) => setActivityLevel(value)}
          items={[
            { label: 'Sedentário', value: 'sedentary' },
            { label: 'Levemente Ativo', value: 'lightlyActive' },
            { label: 'Moderadamente Ativo', value: 'moderatelyActive' },
            { label: 'Bastante Ativo', value: 'veryActive' },
            { label: 'Muito Ativo', value: 'extremelyActive' },
          ]}
          placeholder={{}}
        />
      </PickerContainer>

      <CalculateButton onPress={calculateCalories}>
        <CalculateButtonText>Calcular Calorias</CalculateButtonText>
      </CalculateButton>

      {result !== null && (
        <ResultContainer>
          <ResultText>{`Você precisa consumir aproximadamente ${result} calorias por dia.`}</ResultText>
          <CalculateButton onPress={clearInputs}>
            <CalculateButtonText>Limpar</CalculateButtonText>
          </CalculateButton>
        </ResultContainer>
      )}
    </CaloriesCalculatorContainer>
  );
};

export default CaloriesCalculator;
