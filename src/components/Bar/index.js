import { TouchableOpacity } from 'react-native';
import {
    CategoryContainer,
    KcalLogoImg,
    ImcLogoImg,
    IconContainer,
} from './style';

import KcalLogo from '../../assets/logo.png';
import ImcLogo from '../../assets/imcLogo.png';

export default function Bar() {
    return (
        <CategoryContainer>
            <IconContainer>

                <TouchableOpacity>
                    <KcalLogoImg source={KcalLogo} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <ImcLogoImg source={ImcLogo} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <KcalLogoImg source={KcalLogo} />
                </TouchableOpacity>

                </IconContainer>
        </CategoryContainer>
    );
}
