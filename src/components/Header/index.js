import React from 'react';
import { HeaderContainer, KcalLogoImg } from './style';
import KcalLogo from '../../assets/logo.png';

export default function Header() {
    return (
        <HeaderContainer>
            <KcalLogoImg source={KcalLogo} />
        </HeaderContainer>
    );
}
