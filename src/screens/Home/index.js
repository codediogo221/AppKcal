import {Image, Text, StyleSheet, View, TouchableOpacity, Button, TextInput} from 'react-native';

import KcalLogo from '../../assets/logo.png';
import UserLogo from '../../assets/user.png';
import GraficoLogo from '../../assets/grafico.png';
import PranchetaLogo from '../../assets/prancheta.png';

export const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.KcalLogoImg} source={KcalLogo}/>
            </View>
        
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

        <View style={styles.UserInfo}>
            <Text>Altura</Text>
            <Text>Peso (Kg)</Text>
            <Text>Gênero</Text>
            <Text>Idade</Text>
            <Text>IMC</Text>
        </View>

        </View> 
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
    },

    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDEAD',
    },

    KcalLogoImg: {
        width: 200,
        height: 200,
    },

    category: {
        backgroundColor: '#F4A460',
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 15,
        marginTop: -30,
    },

    UserLogo: {
        width: 40,
        height: 40,
    },

    GraficoLogo: {
        width: 40,
        height: 40,
    },

    PranchetaLogo: {
        width: 55,
        height: 40,
    },

    categoryText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
    },
});