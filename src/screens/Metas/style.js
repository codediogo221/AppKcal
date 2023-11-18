import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-right: 8px;
  padding: 8px;
  border-color: gray;
  border-width: 1px;
`;

export const StyledButton = styled.Button``;

export const MetaItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #ccc;
  background-color: ${(props) => (props.completed ? '#e0e0e0' : 'white')};
`;