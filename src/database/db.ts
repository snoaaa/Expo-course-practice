import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('todoApp.db');

export interface TaskRecord {
  id: number;
  title: string;
  status: 'pending' | 'ongoing' | 'completed';
}

export const initDatabase = (): void => {
  try {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending'
      );
    `);

    const existing = db.getAllSync<TaskRecord>('SELECT * FROM tasks LIMIT 1;');
    if (existing.length === 0) {
      db.runSync(
        'INSERT INTO tasks (title, status) VALUES (?, ?), (?, ?), (?, ?);',
        [
          'Complete TD1 Layouts', 'completed',
          'Implement ActionSheet in TD2', 'ongoing',
          'Setup Left Menu & Tabs', 'pending'
        ]
      );
    }
  } catch (error) {
    console.error('Error initializing SQLite:', error);
  }
};

export const fetchTasks = (filter: string = 'All'): TaskRecord[] => {
  try {
    if (!filter || filter.toLowerCase() === 'all') {
      return db.getAllSync<TaskRecord>('SELECT * FROM tasks ORDER BY id DESC;');
    }
    return db.getAllSync<TaskRecord>(
      'SELECT * FROM tasks WHERE LOWER(status) = ? ORDER BY id DESC;',
      [filter.toLowerCase()]
    );
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

export const insertTask = (title: string): number => {
  const cleanTitle = title.trim();
  if (!cleanTitle) return 0;

  const result = db.runSync(
    'INSERT INTO tasks (title, status) VALUES (?, ?);',
    [cleanTitle, 'pending']
  );
  return result.lastInsertRowId;
};

export const updateTask = (
  id: number,
  newTitle: string,
  newStatus: 'pending' | 'ongoing' | 'completed'
): void => {
  db.runSync(
    'UPDATE tasks SET title = ?, status = ? WHERE id = ?;',
    [newTitle, newStatus, id]
  );
};

export const deleteTask = (id: number): void => {
  db.runSync('DELETE FROM tasks WHERE id = ?;', [id]);
};
