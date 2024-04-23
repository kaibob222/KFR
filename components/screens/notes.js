import React, {useState} from 'react';
import {Text, 
        View,
        TextInput,
        StyleSheet
      }
from 'react-native';

const Notes = () => {
  const [note, setNote] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        placeholder="Enter a note..."
        value={note}
        onChangeText={setNote}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 20, 
    paddingTop: 20, 
  },
  textInput: {
    flex: 0,
    fontSize: 17, 
    lineHeight: 24, 
  },
});

export default Notes;
