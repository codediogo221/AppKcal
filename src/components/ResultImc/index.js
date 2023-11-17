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
    HealthTipsContainer,
    HealthTipsText,

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

    const healthTips = {
        'Abaixo do peso': 'Dica para quem está abaixo do peso: Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio, Acabou',

        'Peso normal': 'Dica para quem está abaixo do peso: Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio, Acabou',

        'Sobrepeso': 'Dica para quem está abaixo do peso: Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio, Acabou',

        'Obesidade': 'Dica para quem está abaixo do peso: Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio,Pratique muito exercicio, Acabou',
    };

    const tips = healthTips[imcClassification] || '';

    return (
        <ContextImc>
            <TitleResultImc>{props.messageResultImc}</TitleResultImc>
            <ResultImcText>{props.resultImc}</ResultImcText>
            <ClassificationText>{imcClassification}</ClassificationText>

            <HealthTipsContainer>
                <HealthTipsText>{tips}</HealthTipsText>
            </HealthTipsContainer>

            <BoxShareButton>
                <ShareButton onPress={onShare}>
                    <ShareText>Compartilhar</ShareText>
                </ShareButton>
            </BoxShareButton>

        </ContextImc>
    );
}
