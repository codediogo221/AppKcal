import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
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
`;

export const StyledCalculateButton = styled.TouchableOpacity`
  background-color: #FF7F50;
  padding: 10px;
  border-radius: 10px; 
  align-items: center;
  margin-top: 10px;
`;

export const StyledButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
