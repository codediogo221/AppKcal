import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

const FormContainer = styled.View`
  padding: 20px;
`;

const AdicionarMetaForm = ({ onAdicionarMeta }) => {
  const [novaMeta, setNovaMeta] = useState({ title: '', description: '' });

  const handleInputChange = (campo, valor) => {
    setNovaMeta((prevMeta) => ({ ...prevMeta, [campo]: valor }));
  };

  const handleAdicionarMeta = () => {
    onAdicionarMeta(novaMeta);
    setNovaMeta({ title: '', description: '' });
  };

  return (
    <FormContainer>
      <TextInput
        placeholder="Titulo da Tarefa"
        value={novaMeta.title}
        onChangeText={(text) => handleInputChange('title', text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Titulo da Descrição"
        value={novaMeta.description}
        onChangeText={(text) => handleInputChange('description', text)}
        style={{ marginBottom: 10 }}
      />
      <Button title="Adicionar Tarefa" onPress={handleAdicionarMeta} style={{ marginTop:10 }} />
    </FormContainer>
  );
};

export default AdicionarMetaForm;
