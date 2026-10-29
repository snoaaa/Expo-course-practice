import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { TaskInput } from '@/components/tasks/TaskInput';
import { TaskItem } from '@/components/tasks/TaskItem';
import { TaskCounter } from '@/components/tasks/TaskCounter';
import { StatusFilter } from '@/components/tasks/StatusFilter';
import {
  initDatabase,
  fetchTasks,
  insertTask,
  updateTask,
  deleteTask,
  TaskRecord,
} from '@/database/db';
import { styles } from '@/styles/appStyles';
import { Toolbar } from '@/components/common/Toolbar';
import { Footer } from '@/components/common/Footer';

export default function TaskTrackerScreen() {
  const router = useRouter();
  const [allTasks, setAllTasks] = useState<TaskRecord[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const loadTasks = useCallback(() => {
    const data = fetchTasks('All');
    setAllTasks(data);
  }, []);

  useEffect(() => {
    initDatabase();
    loadTasks();
  }, [loadTasks]);

  const handleAddTask = (title: string) => {
    insertTask(title);
    loadTasks();
  };

  const handleUpdateTask = (
    id: number,
    newTitle: string,
    newStatus: 'pending' | 'ongoing' | 'completed'
  ) => {
    updateTask(id, newTitle, newStatus);
    loadTasks();
  };

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
    loadTasks();
  };

  const displayedTasks =
    activeFilter === 'All'
      ? allTasks
      : allTasks.filter((task) => task.status === activeFilter.toLowerCase());

  return (
    <View style={tasksScreenStyles.container}>
      <Toolbar
        title="SQLite Task Tracker"
        subtitle="expo-sqlite Lab • Abraham"
        backgroundColor="#0F172A"
      />

      <View style={styles.container}>
        <TaskCounter tasks={allTasks} currentFilter={activeFilter} />

        <TaskInput onAddTask={handleAddTask} />

        <StatusFilter
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        <FlatList
          data={displayedTasks}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 12 }}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', color: '#94A3B8', marginTop: 20, fontSize: 13 }}>
              No {activeFilter.toLowerCase()} tasks found.
            </Text>
          }
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
            />
          )}
        />

        <View style={tasksScreenStyles.aboutButtonWrapper}>
          <Button
            title="About App"
            color="#0F172A"
            onPress={() => router.push('/about')}
          />
        </View>
      </View>

      <Footer authorName="Abraham" />
    </View>
  );
}

const tasksScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  aboutButtonWrapper: {
    paddingVertical: 6,
  },
});
