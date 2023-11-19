import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const MetaItem = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 10px;
  border-width: 1px;
  border-radius: 5px;
  border-color: #ddd;
  background-color: ${(props) => (props.completed ? '#e0f7fa' : 'transparent')};
`;

export const BotaoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ExcluirButton = styled.TouchableOpacity`
  background-color: #f44336;
  padding: 5px 10px;
  border-radius: 3px;
`;

export const MarcarConcluidoButton = styled.TouchableOpacity`
  background-color: #4CAF50;
  padding: 5px 10px;
  border-radius: 3px;
`;

export const DesfazerConclusaoButton = styled.TouchableOpacity`
  background-color: #FFA500;
  padding: 5px 10px;
  border-radius: 3px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

export const MetaText = styled.Text`
  font-size: 16px;
  margin-right: 10px;
  color: ${(props) => (props.completed ? '#4CAF50' : '#000')};
`;

export const MetaDescription = styled.Text`
  font-size: 14px;
  color: #757575;
  margin-bottom: 5px;
`;

export const StyledIcon = styled(Icon)`
  margin-left: auto;
`;
