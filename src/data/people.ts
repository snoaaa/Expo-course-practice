import { ImageSourcePropType } from 'react-native';

export interface Person {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  avatar: ImageSourcePropType;
  department: string;
}

export const INITIAL_PEOPLE: Person[] = [
  {
    id: 'p-1',
    name: 'Dr. Sophie Laurent',
    role: 'Lead AI & Mobile Researcher',
    phone: '+33 6 12 34 56 78',
    email: 'sophie.laurent@school-mobile.edu',
    avatar: require('../../assets/images/people/sophie.jpg'),
    department: 'Computer Science & Software Eng.',
  },
  {
    id: 'p-2',
    name: 'Alexandre Dubois',
    role: 'Senior React Native Architect',
    phone: '+33 6 98 76 54 32',
    email: 'alex.dubois@technologies.org',
    avatar: require('../../assets/images/people/alexandre.jpg'),
    department: 'Mobile Systems Engineering',
  },
  {
    id: 'p-3',
    name: 'Clara Moreau',
    role: 'UI/UX Design Systems Lead',
    phone: '+33 6 55 44 33 22',
    email: 'clara.moreau@designlab.fr',
    avatar: require('../../assets/images/people/clara.jpg'),
    department: 'Human-Computer Interaction',
  },
  {
    id: 'p-4',
    name: 'Marcus Vance',
    role: 'Database & Embedded Engineer',
    phone: '+44 7700 900077',
    email: 'm.vance@sqlite-core.io',
    avatar: require('../../assets/images/people/marcus.jpg'),
    department: 'Distributed Data Architecture',
  },
  {
    id: 'p-5',
    name: 'Elena Rostova',
    role: 'Cloud Native & Mobile DevOps',
    phone: '+33 6 42 00 11 99',
    email: 'elena.rostova@cloudinfra.net',
    avatar: require('../../assets/images/people/elena.jpg'),
    department: 'DevOps & Site Reliability',
  },
];
