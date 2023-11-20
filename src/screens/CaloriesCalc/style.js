// Updated styles for CaloriasCalculator
import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
  justify-content: flex-start; /* Adjusted to move the container to the top */
  padding-horizontal: 20px;
  padding-top: 20px; /* Adjusted to add more padding at the top */
`;

export const StyledTextExplicativo = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-horizontal: 10px;

  border-radius: 50px;
  background-color: #f6f6f6;
`;

export const StyledResult = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const StyledErrorText = styled.Text`
  color: red;
  margin-bottom: 14px;
  text-align: left;
  font-weight: bold;
`;

export const StyledCalculateButton = styled.TouchableOpacity`
  background-color: #FF7F50;
  padding: 14px;
  border-radius: 50px; 
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const StyledButtonText = styled.Text`
  color: white;
  font-size: 20px; /* Adjusted font size to match ImcCalc */
`;
