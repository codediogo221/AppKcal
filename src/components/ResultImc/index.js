import React from 'react';
import { Share } from 'react-native';
import {
    ContextImc,
    ResultImcText,
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

    return (
        <ContextImc>
            <TitleResultImc>{props.messageResultImc}</TitleResultImc>
            <ResultImcText>{props.resultImc}</ResultImcText>
            <BoxShareButton>
                <ShareButton onPress={onShare}>
                    <ShareText>Compartilhar</ShareText>
                </ShareButton>
            </BoxShareButton>
        </ContextImc>
    );
}
