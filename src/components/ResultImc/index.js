import React from 'react';
import { Share } from 'react-native';
import {
    ContextImc,
    ResultImcText,
    ClassificationText,
    TitleResultImc,
    BoxShareButton,
    ShareButton,
    ShareText,
} from './style';

export default function ResultImc(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC hoje é ${props.resultImc}`,
        });
    };

    const getIMCClassification = (imc) => {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Sobrepeso';
        } else {
            return 'Obesidade';
        }
    };

    const imcClassification = getIMCClassification(props.resultImc);

    return (
        <ContextImc>
            <TitleResultImc>{props.messageResultImc}</TitleResultImc>
            <ResultImcText>{props.resultImc}</ResultImcText>
            <ClassificationText>{imcClassification}</ClassificationText>
            <BoxShareButton>
                <ShareButton onPress={onShare}>
                    <ShareText>Compartilhar</ShareText>
                </ShareButton>
            </BoxShareButton>
        </ContextImc>
    );
}
