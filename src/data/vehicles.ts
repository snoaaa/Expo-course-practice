import { ImageSourcePropType } from 'react-native';

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  horsepower: number;
  photo: ImageSourcePropType;
  category: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'veh-1',
    brand: 'Ferrari',
    model: 'Roma Spider',
    horsepower: 612,
    category: 'V8 Twin-Turbo Grand Tourer',
    photo: require('../../assets/images/vehicles/ferrari.jpg'),
  },
  {
    id: 'veh-2',
    brand: 'Porsche',
    model: '911 GT3 (992)',
    horsepower: 502,
    category: 'Naturally Aspirated Flat-6',
    photo: require('../../assets/images/vehicles/porsche.jpg'),
  },
  {
    id: 'veh-3',
    brand: 'Tesla',
    model: 'Model S Plaid',
    horsepower: 1020,
    category: 'Tri-Motor All-Wheel Drive EV',
    photo: require('../../assets/images/vehicles/tesla.jpg'),
  },
  {
    id: 'veh-4',
    brand: 'BMW',
    model: 'M4 Competition Coupé',
    horsepower: 503,
    category: 'M TwinPower Turbo Inline-6',
    photo: require('../../assets/images/vehicles/bmw.jpg'),
  },
  {
    id: 'veh-5',
    brand: 'Mercedes-AMG',
    model: 'GT 63 S 4-Door',
    horsepower: 630,
    category: '4.0L Biturbo V8 Performance',
    photo: require('../../assets/images/vehicles/mercedes.jpg'),
  },
];
