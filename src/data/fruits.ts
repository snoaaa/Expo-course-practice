import { ImageSourcePropType } from 'react-native';

export interface Fruit {
  id: string;
  name: string;
  botanicalName: string;
  taste: string;
  caloriesPer100g: number;
  vitamins: string[];
  origin: string;
  cardColor: string;
  accentColor: string;
  photo: ImageSourcePropType;
  description: string;
}

export const FRUITS: Fruit[] = [
  {
    id: 'fruit-1',
    name: 'Alphonso Mango',
    botanicalName: 'Mangifera indica',
    taste: 'Intensely sweet & rich with floral notes',
    caloriesPer100g: 60,
    vitamins: ['Vitamin C (60%)', 'Vitamin A', 'Folate', 'B6'],
    origin: 'Ratnagiri, Maharashtra, India',
    cardColor: '#FFFBEB',
    accentColor: '#D97706',
    photo: require('../../assets/images/fruits/mango.jpg'),
    description: 'Revered as the "King of Mangoes", known worldwide for its fragrant saffron flesh and velvety smooth texture.',
  },
  {
    id: 'fruit-2',
    name: 'Wild Alpine Strawberry',
    botanicalName: 'Fragaria vesca',
    taste: 'Concentrated berry perfume, crisp sweet-tart',
    caloriesPer100g: 32,
    vitamins: ['Vitamin C (98%)', 'Manganese', 'Potassium'],
    origin: 'Northern European Woodlands',
    cardColor: '#FFF1F2',
    accentColor: '#E11D48',
    photo: require('../../assets/images/fruits/strawberry.jpg'),
    description: 'Prized by gourmet patissiers, small yet packed with unforgettable aroma and potent antioxidant flavonoids.',
  },
  {
    id: 'fruit-3',
    name: 'Dragon Fruit (Pitaya)',
    botanicalName: 'Selenicereus undatus',
    taste: 'Delicate, mildly sweet with kiwi-like seeds',
    caloriesPer100g: 50,
    vitamins: ['Vitamin C', 'Iron', 'Magnesium', 'Fiber (3g)'],
    origin: 'Central America & Southeast Asia',
    cardColor: '#FDF2F8',
    accentColor: '#DB2777',
    photo: require('../../assets/images/fruits/dragonfruit.jpg'),
    description: 'Vibrant fuchsia scales enclosing refreshing, hydration-dense pulp rich in prebiotics and dietary fiber.',
  },
  {
    id: 'fruit-4',
    name: 'Hass Avocado',
    botanicalName: 'Persea americana',
    taste: 'Buttery, nutty, and velvety smooth',
    caloriesPer100g: 160,
    vitamins: ['Healthy Monounsaturated Fats', 'Vitamin K', 'Potassium', 'Vitamin E'],
    origin: 'Michoacán, Mexico',
    cardColor: '#F0FDF4',
    accentColor: '#16A34A',
    photo: require('../../assets/images/fruits/avocado.jpg'),
    description: 'A nutrient powerhouse offering heart-healthy oleic acid, providing sustained energy and culinary versatility.',
  },
  {
    id: 'fruit-5',
    name: 'Wild Mountain Blueberry',
    botanicalName: 'Vaccinium myrtillus',
    taste: 'Sweet-tart burst, deep anthocyanin complexity',
    caloriesPer100g: 57,
    vitamins: ['Anthocyanins', 'Vitamin K1', 'Vitamin C'],
    origin: 'Sub-Alpine High Latitudes',
    cardColor: '#EFF6FF',
    accentColor: '#2563EB',
    photo: require('../../assets/images/fruits/blueberry.jpg'),
    description: 'Renowned superfood with one of the highest recorded antioxidant capacities among all fruits and vegetables.',
  },
];
