import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import TipoDica from './style';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

const tipsData = [
  { id: '1', title: 'Beber água regularmente', description: 'Mantenha-se hidratado ao longo do dia.' },
  { id: '2', title: 'Alimentação equilibrada', description: 'Consuma uma variedade de alimentos saudáveis.' },
  { id: '3', title: 'Alimentação equilibrada', description: 'Consuma uma variedade de alimentos saudáveis.' },
  { id: '4', title: 'Alimentação equilibrada', description: 'Consuma uma variedade de alimentos saudáveis.' },
  { id: '5', title: 'Alimentação equilibrada', description: 'Consuma uma variedade de alimentos saudáveis.' },
  { id: '6', title: 'Alimentação equilibrada', description: 'Consuma uma variedade de alimentos saudáveis.' },
  { id: '7', title: 'Alimentação equilibrada', description: 'Consuma uma variedade de alimentos saudáveis.' },
  { id: '8', title: 'Alimentação equilibrada', description: 'Consuma uma variedade de alimentos saudáveis.' },
  { id: '9', title: 'Alimentação equilibrada', description: 'Consuma uma variedade de alimentos saudáveis.' },
  { id: '10', title: 'Alimentação equilibrada', description: 'Consuma uma variedade de alimentos saudáveis.' },
];

const Dicas = () => {
  return (
    <Container>
      <FlatList
        data={tipsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TipoDica title={item.title} description={item.description} />}
      />
    </Container>
  );
};

export default Dicas;
