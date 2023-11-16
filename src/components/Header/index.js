import {Image, View} from 'react-native';
import styles from "./style";

import KcalLogo from '../../assets/logo.png'

export default function Header () {

    return (
        <View style={styles.header}>
            <Image style={styles.KcalLogoImg} source={KcalLogo}/>
        </View> 
    )
};