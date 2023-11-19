import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import CaloriesCalc from './screens/CaloriesCalc/CaloriesCalc';
import ImcCalc from './screens/ImcCalc/ImcCalc';
import Metas from './screens/Metas/Metas';
import Dicas from './screens/Dicas/Dicas';

const ImcCalcName = "IMC";
const CaloriesCalcName = "Contador de Calorias";
const MetasName = "Metas";
const DicasName = "Dicas";

// Imagens para cada tela
const tabIcons = {
  [ImcCalcName]: require('./assets/imcLogo.png'),
  [CaloriesCalcName]: require('./assets/kcalLogo.png'),
  [MetasName]: require('./assets/metasLogo.png'),
  [DicasName]: require('./assets/dicasLogo.png'),
};

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ImcCalcName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            const iconPath = tabIcons[route.name];
            
            return <Image source={iconPath} style={{ width: size, height: size }} />;
          },
          headerRight: () => (
            <Image
              source={require('./assets/logo.png')}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
          ),
        })}
        screnOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={ImcCalcName} component={ImcCalc} />
        <Tab.Screen name={CaloriesCalcName} component={CaloriesCalc} />
        <Tab.Screen name={MetasName} component={Metas} />
        <Tab.Screen name={DicasName} component={Dicas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
