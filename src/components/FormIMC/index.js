import React, { useState } from "react";
import {
    Vibration,
    Keyboard,
} from "react-native";
import {
    FormContext,
    FormContainer,
    FormLabel,
    Input,
    ButtonCalculator,
    TextButtonCalculator,
    ErrorMessage,
    ExhibitionResultImc,
} from "./style";
import ResultImc from "../ResultImc";

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);

    function verifyImc() {
        if (imc === null) {
            Vibration.vibrate();
            setErrorMessage('Campo obrigatório*');
        }
    }

    function calcImc() {
        let heightFormat = height.replace(',', '.');
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        setImc(totalImc);
    }

    function validationImc() {
        if (weight != null && height != null) {
            calcImc();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
        } else {
            verifyImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura");
        }
    }

    return (
        <FormContext>
            {imc == null ? (
                <FormContainer onPress={() => Keyboard.dismiss()}>
                    <FormLabel>Altura</FormLabel>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <Input
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                    />
                    <FormLabel>Peso</FormLabel>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <Input
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex. 75.555"
                        keyboardType="numeric"
                    />
                    <ButtonCalculator
                        title={textButton}
                        onPress={() => validationImc()}
                    >
                        <TextButtonCalculator>{textButton}</TextButtonCalculator>
                    </ButtonCalculator>
                </FormContainer>
            ) : (
                <ExhibitionResultImc>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                    <ButtonCalculator
                        title={textButton}
                        onPress={() => validationImc()}
                    >
                        <TextButtonCalculator>{textButton}</TextButtonCalculator>
                    </ButtonCalculator>
                </ExhibitionResultImc>
            )}
        </FormContext>
    );
}
