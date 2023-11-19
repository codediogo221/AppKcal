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
  { id: '1', title: 'Alimente-se corretamente', description: 'Alimentar-se da maneira certa é o ponto de partida para quem quer mudar. É preciso usufruir de uma dieta balanceada, ingerindo alimentos saudáveis e cortando comidas que são prejudiciais. Tenha certeza de que isso fará muito bem para você.' },
  { id: '2', title: 'Alimente-se em horários corretos', description: 'Além de comer corretamente, mantenha horários certos para cada refeição, pois isso facilitará o trabalho do seu corpo. Se preciso, procure um nutricionista. Ao separarmos um tempo para uma correta alimentação, consequentemente mudamos o nosso corpo e mente.' },
  { id: '3', title: 'Beba água', description: 'A água é essencial para a vida. Por isso, busque sempre bebê-la ao longo do dia. Esse hábito irá fazer com que o seu metabolismo esteja sempre em movimento.' },
  { id: '4', title: 'Pratique exercício físico', description: 'Encontre o exercício que mais te satisfaz e comece a praticá-lo. Exercícios são essenciais para um bom funcionamento do corpo: além de todos os benefícios, eles ajudam a prevenir doenças e a manter uma mente focada.' },
  { id: '5', title: 'Durma bem', description: 'Ter uma boa noite de sono é importantíssimo para o organismo, afinal, o nosso corpo precisa descansar e recarregar as energias, porém, sem exageros. É preciso dormir, no mínimo, 8 horas por dia.' },
  { id: '6', title: 'Relaxe', description: 'Faça exercícios que te ajudem a relaxar e a descarregar toda a tensão da rotina. Ouça uma música, faça uma massagem, assista o seu filme favorito ou pratique ioga. Essas e outras formas de relaxamento são válidas e bem-vindas.' },
  { id: '7', title: 'Respire', description: 'Quando estiver nervosa ou ansiosa, respire. Pare por uns minutos o que está fazendo e preste atenção em sua respiração. Concentre-se somente nela e no seu corpo trabalhando perfeitamente. Esse exercício poderá ser muito útil em diversos momentos.' },
  { id: '8', title: 'Não tome remédios sem orientação médica', description: 'Isso pode ser extremamente perigoso e prejudicial à sua saúde. Sempre que estiver com algum sintoma diferente, procure um especialista, pois apenas ele poderá passar a orientação correta.' },
  { id: '9', title: 'Cuide da sua higiene', description: 'Muitas doenças estão em lugares que frequentamos diariamente, como transportes e ambientes públicos. Além disso, também é muito comum, problemas de saúde causados por comidas. Por isso, lave sempre os alimentos antes de consumi-los e as mãos com água e sabão (na sua ausência, use álcool gel), evitando coloca-las no rosto.' },
  { id: '10', title: 'Mantenha-se feliz', description: 'Para finalizar, uma dica valiosa: todos sabemos que a vida é feita de altos e baixos, porém, buscar a felicidade em todos os momentos, é imprescindível. Procure ver o lado bom da vida!' },
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
