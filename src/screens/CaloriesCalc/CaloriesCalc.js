import React, { useState } from 'react';
import {
  StyledContainer,
  StyledTextExplicativo,
  StyledInput,
  StyledResult,
  StyledErrorText,
  StyledCalculateButton,
  StyledButtonText,
} from './style';

const CaloriasCalculator = () => {
  const [carboidratos, setCarboidratos] = useState('');
  const [proteinas, setProteinas] = useState('');
  const [gorduras, setGorduras] = useState('');
  const [calorias, setCalorias] = useState(0);
  const [botaoTexto, setBotaoTexto] = useState('Calcular');

  const [carbError, setCarbError] = useState('');
  const [protError, setProtError] = useState('');
  const [fatError, setFatError] = useState('');

  const calcularCalorias = () => {
    setCarbError('');
    setProtError('');
    setFatError('');

    if (!carboidratos) {
      setCarbError('Campo obrigatório');
    }

    if (!proteinas) {
      setProtError('Campo obrigatório');
    }

    if (!gorduras) {
      setFatError('Campo obrigatório');
    }

    if (!carboidratos || !proteinas || !gorduras) {
      return;
    }

    const carbs = parseFloat(carboidratos);
    const prots = parseFloat(proteinas);
    const fats = parseFloat(gorduras);

    const caloriasTotais = carbs * 4 + prots * 4 + fats * 9;

    setCalorias(caloriasTotais);
    setCarboidratos('');
    setProteinas('');
    setGorduras('');
    setBotaoTexto('Calcular Novamente');
  };

  return (
    <StyledContainer>
      <StyledTextExplicativo>
        Insira a quantidade de carboidratos, proteínas e gorduras do alimento para calcular as calorias totais.
        Um grama de carboidratos fornece 4 calorias, um grama de proteínas também fornece 4 calorias, e um grama de gorduras fornece 9 calorias.
      </StyledTextExplicativo>
      <StyledInput
        placeholder="Carboidratos (g)"
        keyboardType="numeric"
        value={carboidratos}
        onChangeText={(text) => {
          setCarboidratos(text);
          setCarbError('');
        }}
      />
      {carbError ? <StyledErrorText>{carbError}</StyledErrorText> : null}
      <StyledInput
        placeholder="Proteínas (g)"
        keyboardType="numeric"
        value={proteinas}
        onChangeText={(text) => {
          setProteinas(text);
          setProtError('');
        }}
      />
      {protError ? <StyledErrorText>{protError}</StyledErrorText> : null}
      <StyledInput
        placeholder="Gorduras (g)"
        keyboardType="numeric"
        value={gorduras}
        onChangeText={(text) => {
          setGorduras(text);
          setFatError('');
        }}
      />
      {fatError ? <StyledErrorText>{fatError}</StyledErrorText> : null}
      <StyledCalculateButton onPress={calcularCalorias}>
        <StyledButtonText>{botaoTexto}</StyledButtonText>
      </StyledCalculateButton>
      <StyledResult>Total de Calorias: {calorias}</StyledResult>
    </StyledContainer>
  );
};

export default CaloriasCalculator;
