import {Image, View, TouchableOpacity} from 'react-native';
import styles from "./style";

import UserLogo from '../../assets/user.png';
import GraficoLogo from '../../assets/grafico.png';
import PranchetaLogo from '../../assets/prancheta.png';

export default function Bar () {

    return (     
        <View style={styles.category}>
            <TouchableOpacity>
                <Image style={styles.UserLogo} source={UserLogo}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.GraficoLogo} source={GraficoLogo}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.PranchetaLogo} source={PranchetaLogo}/>
            </TouchableOpacity>
        </View>
    )
};