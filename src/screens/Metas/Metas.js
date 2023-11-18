import React, { useState } from 'react';
import { FlatList } from 'react-native';
import * as Styles from './style';
import { metas as initialMetas } from '../../components/mocks/metas'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Metas({ navigation }) {
  const [meta, setMeta] = useState('');
  const [metas, setMetas] = useState(initialMetas);

  const addMeta = () => {
    if (meta.trim() !== '') {
      setMetas([...metas, { id: metas.length + 1, text: meta, completed: false }]);
      setMeta('');
    }
  };

  const toggleMeta = (id) => {
    setMetas((prevMetas) =>
      prevMetas.map((meta) =>
        meta.id === id ? { ...meta, completed: !meta.completed } : meta
      )
    );
  };

  const removeMeta = (id) => {
    setMetas((prevMetas) => prevMetas.filter((meta) => meta.id !== id));
  };

  return (
    <Styles.Container>
      <Styles.Title>Metas</Styles.Title>
      
      <Styles.InputContainer>
        <Styles.Input
          placeholder="Digite uma meta"
          value={meta}
          onChangeText={(text) => setMeta(text)}
        />
        <Styles.StyledButton title="Adicionar" onPress={addMeta} />
      </Styles.InputContainer>

      <FlatList
        data={metas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Styles.MetaItem
            completed={item.completed}
            onPress={() => toggleMeta(item.id)}
            onLongPress={() => removeMeta(item.id)}
          >
            <Styles.MetaText completed={item.completed}>{item.text}</Styles.MetaText>
            {item.completed && <Icon name="check" size={20} color="#007bff" />}
          </Styles.MetaItem>
        )}
      />
    </Styles.Container>
  );
}