import * as React from 'react';
import { View, Text } from 'react-native';

export default function CaloriesCalc({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Contador de Calorias')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Calories Calc</Text>
        </View>
    );
}