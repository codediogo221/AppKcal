import * as React from 'react';
import { View, Text } from 'react-native';

export default function Metas({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Metas')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Metas Screen</Text>
        </View>
    );
}