export interface PlaceItem {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  backgroundColor: string;
  textColor: string;
  subtitleColor: string;
  badgeBg: string;
  iconName: string;
}

export const PLACES: PlaceItem[] = [
  {
    id: 'place-1',
    name: 'Eiffel Tower Gardens',
    address: 'Champ de Mars, 5 Avenue Anatole France',
    city: 'Paris',
    country: 'France',
    backgroundColor: '#312E81', // Deep Indigo
    textColor: '#FFFFFF',
    subtitleColor: '#C7D2FE',
    badgeBg: '#4338CA',
    iconName: 'location',
  },
  {
    id: 'place-2',
    name: 'Central Park Bow Bridge',
    address: 'Mid-Park at 74th Street',
    city: 'New York City',
    country: 'United States',
    backgroundColor: '#064E3B', // Deep Emerald Pine
    textColor: '#FFFFFF',
    subtitleColor: '#A7F3D0',
    badgeBg: '#047857',
    iconName: 'leaf',
  },
  {
    id: 'place-3',
    name: 'Shibuya Sky Observatory',
    address: '2-24-12 Shibuya, Shibuya-ku',
    city: 'Tokyo',
    country: 'Japan',
    backgroundColor: '#831843', // Deep Crimson Rose
    textColor: '#FFFFFF',
    subtitleColor: '#FBCFE8',
    badgeBg: '#BE185D',
    iconName: 'star',
  },
  {
    id: 'place-4',
    name: 'Basílica de la Sagrada Família',
    address: 'Carrer de Mallorca, 401',
    city: 'Barcelona',
    country: 'Spain',
    backgroundColor: '#7C2D12', // Rich Terracotta Copper
    textColor: '#FFFFFF',
    subtitleColor: '#FED7AA',
    badgeBg: '#C2410C',
    iconName: 'business',
  },
  {
    id: 'place-5',
    name: 'Bennelong Point Harbour',
    address: 'Macquarie Street, Bennelong Point',
    city: 'Sydney',
    country: 'Australia',
    backgroundColor: '#0F766E', // Vibrant Deep Teal
    textColor: '#FFFFFF',
    subtitleColor: '#99F6E4',
    badgeBg: '#14B8A6',
    iconName: 'water',
  },
];

