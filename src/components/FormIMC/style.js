import styled from 'styled-components/native';

export const FormContext = styled.View`
    flex: 1;
    background-color: #ffffff;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    align-items: center;
    padding-top: 20px;
`;

export const FormContainer = styled.Pressable`
    width: 100%;
`;

export const FormLabel = styled.Text`
    color: #000000;
    font-size: 18px;
    padding-left: 20px;
`;

export const Input = styled.TextInput`
    width: 90%;
    border-radius: 50px;
    background-color: #f6f6f6;
    height: 40px;
    margin: 12px;
    padding-left: 10px;
`;

export const ButtonCalculator = styled.TouchableOpacity`
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: #FF0043;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-left: 12px;
    margin-top: 30px;
`;

export const TextButtonCalculator = styled.Text`
    font-size: 20px;
    color: #ffffff;
`;

export const ErrorMessage = styled.Text`
    font-size: 12px;
    color: red;
    font-weight: bold;
    padding-left: 20px;
`;

export const ExhibitionResultImc = styled.View`
    width: 100%;
    height: 50%; 
`;

export const ListImcs = styled.View`
    margin-top: 20px;
`;

export const ResultImcItem = styled.Text`
    font-size: 28px;
    color: red;
    height: 50px;
    width: 100%;
    padding-right: 20px;
`;

export const TextResultItemList = styled.Text`
    color: red;
    font-size: 16px;
`;
