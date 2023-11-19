import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import * as Style from './style';
import AdicionarMetaForm from './AdicionarMetaForm';
import { dataMeta } from '../../components/mocks/metas';

const Metas = () => {
  const [metas, setMetas] = useState(dataMeta);

  const handleToggleCompletion = (id) => {
    setMetas((prevMetas) =>
      prevMetas.map((meta) =>
        meta.id === id ? { ...meta, completed: !meta.completed } : meta
      )
    );
  };

  const handleAdicionarMeta = (novaMeta) => {
    const novaMetaComId = {
      ...novaMeta,
      id: (Math.random() * 1000).toString(),
      completed: false,
    };

    setMetas((prevMetas) => [...prevMetas, novaMetaComId]);
  };

  const handleExcluirMeta = (id) => {
    setMetas((prevMetas) => prevMetas.filter((meta) => meta.id !== id));
  };

  return (
    <Style.Container>
      <AdicionarMetaForm onAdicionarMeta={handleAdicionarMeta} />
      <FlatList
        data={metas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Style.MetaItem completed={item.completed}>
            <TouchableOpacity onPress={() => handleToggleCompletion(item.id)}>
              <>
                <Style.MetaText completed={item.completed}>{item.title}</Style.MetaText>
                <Style.MetaDescription>{item.description}</Style.MetaDescription>
              </>
            </TouchableOpacity>
            <Style.BotaoContainer>
              <Style.ExcluirButton onPress={() => handleExcluirMeta(item.id)}>
                <Style.ButtonText>Excluir</Style.ButtonText>
              </Style.ExcluirButton>
              <Style.MarcarConcluidoButton onPress={() => handleToggleCompletion(item.id)}>
                <Style.ButtonText>
                  {item.completed ? 'Desfazer Conclusão' : 'Marcar como Concluído'}
                </Style.ButtonText>
              </Style.MarcarConcluidoButton>
            </Style.BotaoContainer>
          </Style.MetaItem>
        )}
      />
    </Style.Container>
  );
};

export default Metas;
