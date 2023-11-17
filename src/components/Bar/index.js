import { TouchableOpacity } from 'react-native';
import {
    CategoryContainer,
    UserLogo,
    GraficoLogo,
    PranchetaLogo,
} from './style';

import ImcLogoImage from '../../assets/imcLogo.png';
import GraficoLogoImage from '../../assets/grafico.png';
import PranchetaLogoImage from '../../assets/prancheta.png';

export default function Bar() {
    return (
        <CategoryContainer>
            <TouchableOpacity>
                <UserLogo source={ImcLogoImage} />
            </TouchableOpacity>

            <TouchableOpacity>
                <GraficoLogo source={GraficoLogoImage} />
            </TouchableOpacity>

            <TouchableOpacity>
                <PranchetaLogo source={PranchetaLogoImage} />
            </TouchableOpacity>
        </CategoryContainer>
    );
}
