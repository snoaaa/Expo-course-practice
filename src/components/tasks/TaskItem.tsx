import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/styles/appStyles';
import { TaskRecord } from '@/database/db';

interface TaskItemProps {
  task: TaskRecord;
  onUpdateTask: (id: number, newTitle: string, newStatus: 'pending' | 'ongoing' | 'completed') => void;
  onDeleteTask: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdateTask, onDeleteTask }) => {
  const handleNextStatus = () => {
    let nextStatus: 'pending' | 'ongoing' | 'completed' = 'pending';
    if (task.status === 'pending') nextStatus = 'ongoing';
    else if (task.status === 'ongoing') nextStatus = 'completed';
    else if (task.status === 'completed') nextStatus = 'pending';

    onUpdateTask(task.id, task.title, nextStatus);
  };

  const confirmDelete = () => {
    Alert.alert(
      'Delete Task',
      `Are you sure you want to delete "${task.title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => onDeleteTask(task.id) },
      ]
    );
  };

  const getBadgeStyle = () => {
    switch (task.status) {
      case 'ongoing':
        return { badge: styles.badgeOngoing, text: styles.statusTextOngoing, label: 'Ongoing' };
      case 'completed':
        return { badge: styles.badgeCompleted, text: styles.statusTextCompleted, label: 'Completed' };
      default:
        return { badge: styles.badgePending, text: styles.statusTextPending, label: 'Pending' };
    }
  };

  const badgeInfo = getBadgeStyle();

  return (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={handleNextStatus}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.taskTitle,
            task.status === 'completed' && styles.taskTitleCompleted,
          ]}
        >
          {task.title}
        </Text>
        <View style={[styles.statusBadge, badgeInfo.badge]}>
          <Text style={[styles.statusBadgeText, badgeInfo.text]}>
            {badgeInfo.label}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.taskActions}>
        <TouchableOpacity
          style={[styles.actionIconBtn, styles.deleteBtn]}
          onPress={confirmDelete}
          accessibilityLabel="Delete task"
        >
          <Ionicons name="trash-outline" size={18} color="#DC2626" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
