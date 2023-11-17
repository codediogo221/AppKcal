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
         if (imc < 18.5) return 'Abaixo do peso';
         if (imc < 24.9) return 'Peso normal';
         if (imc < 29.9) return 'Sobrepeso';
         if (imc < 34.9) return 'Obesidade Grau 1';
         if (imc < 39.9) return 'Obesidade Grau 2';
         return 'Obesidade Grau 3';
    };

    const imcClassification = getIMCClassification(props.resultImc);

    const healthTips = {
        'Abaixo do peso': 'Dica: Ganho de Peso Saudável Consulte um nutricionista para desenvolver uma dieta equilibrada e rica em nutrientes. Incorpore alimentos densos em calorias, como nozes, abacate e carnes magras. Combine uma dieta saudável com exercícios de resistência para ganhar massa muscular.',

        'Peso normal': 'Dica: Manutenção e Estilo de Vida Saudáveis Continue com uma dieta balanceada e mantenha a prática de exercícios físicos regulares. Fique atento aos sinais do corpo e ajuste sua rotina conforme necessário. Priorize o sono adequado e o gerenciamento do estresse.',

        'Sobrepeso': 'Dica: Perda de Peso Gradual e Sustentável Consulte um profissional de saúde para um plano de perda de peso seguro. Adote uma dieta equilibrada com porções controladas e reduza a ingestão de alimentos processados e açúcares. Incremente a atividade física gradualmente.',

        'Obesidade Grau 1': 'Dica: Mudanças no Estilo de Vida Busque a orientação de um médico para criar um plano personalizado de perda de peso. Adote hábitos alimentares saudáveis, incluindo porções controladas e escolhas alimentares conscientes. Estabeleça metas realistas e sustentáveis para a perda de peso.',

        'Obesidade Grau 2': 'Dica: Procure ajuda de profissionais de saúde, como um médico, nutricionista e treinador físico. Considere a possibilidade de intervenções médicas, dependendo do grau de obesidade.Inicie um programa de exercícios supervisionado e ajuste sua dieta sob orientação médica.',

        'Obesidade Grau 3': 'Dica: Procure ajuda de profissionais de saúde, como um médico, nutricionista e treinador físico. Considere a possibilidade de intervenções médicas, dependendo do grau de obesidade.Inicie um programa de exercícios supervisionado e ajuste sua dieta sob orientação médica.',
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
