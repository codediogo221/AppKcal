import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Bar from './src/components/Bar';

export default function App() {
  return (
    <>
      <Header />
      <Bar />
      <StatusBar style="auto" />
    </>
  );
}