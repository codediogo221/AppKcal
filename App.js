import { StatusBar } from 'expo-status-bar';

import Header from './src/components/Header';
import Bar from './src/components/Bar';
import FormIMC from './src/components/FormIMC';

export default function App() {
  return (
    <>
      <Header />
      <Bar />
      <FormIMC />
      <StatusBar style="auto" />
    </>
  );
}