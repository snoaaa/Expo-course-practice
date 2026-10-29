import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '@/styles/appStyles';
import { TaskRecord } from '@/database/db';

interface TaskCounterProps {
  tasks: TaskRecord[];
  currentFilter: string;
}

export const TaskCounter: React.FC<TaskCounterProps> = ({ tasks, currentFilter }) => {
  const pendingCount = tasks.filter((t) => t.status === 'pending').length;
  const ongoingCount = tasks.filter((t) => t.status === 'ongoing').length;
  const completedCount = tasks.filter((t) => t.status === 'completed').length;

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>
        {currentFilter === 'All' ? 'Total Tasks' : `${currentFilter} Tasks`}:{' '}
        {currentFilter === 'All'
          ? tasks.length
          : tasks.filter((t) => t.status === currentFilter.toLowerCase()).length}
      </Text>
      <Text style={styles.counterBreakdown}>
        Pending: {pendingCount} | Ongoing: {ongoingCount} | Completed: {completedCount}
      </Text>
    </View>
  );
};
