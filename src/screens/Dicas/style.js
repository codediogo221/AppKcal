import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  background-color: #f0f0f0;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.Text`
  font-size: 16px;
`;

const TipoDica = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default TipoDica;
