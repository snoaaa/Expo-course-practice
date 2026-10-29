import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { styles } from '@/styles/appStyles';

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) {
      Alert.alert('Empty Task', 'Please enter a task title before adding.');
      return;
    }
    onAddTask(title.trim());
    setTitle('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a new task..."
        placeholderTextColor="#94A3B8"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAdd}
        activeOpacity={0.8}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
