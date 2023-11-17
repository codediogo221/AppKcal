import { StatusBar } from 'expo-status-bar';

import Bar from './src/components/Bar';
import FormIMC from './src/components/FormIMC';

export default function App() {
  return (
    <>
      <Bar />
      <FormIMC />
      <StatusBar style="auto" />
    </>
  );
}