// CaloriesCalc/style.js
import styled from 'styled-components/native';

export const CaloriesCalculatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputLabel = styled.Text`
  font-size: 18px;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px;
`;

export const PickerContainer = styled.View`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px;
`;

export const CalculateButton = styled.TouchableOpacity`
  background-color: #FF0043;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const CalculateButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ResultContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const ResultText = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  max-width: 80%; 
  text-align: center;
`;
