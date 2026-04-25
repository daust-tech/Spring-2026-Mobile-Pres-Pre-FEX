export type Country = {
  id: string;
    name: string;
  capital: string;
  population: string;
  region: string;
  language: string;
  currency: string;
  area: string;
  description: string;
};

export const countries: Country[] = [
  {
    id: "senegal",
    name: "Senegal",
    capital: "Dakar",
    population: "17 million",
    region: "West Africa",
    language: "French",
    currency: "West African CFA franc",
    area: "196,722 km²",
    description: "Senegal is a West African nation known for its vibrant culture, music, and the famous pink Lake Retba.",
  },
  {
    id: "france",
    name: "France",
    capital: "Paris",
    population: "68 million",
    region: "Western Europe",
    language: "French",
    currency: "Euro",
    area: "551,695 km²",
    description: "France is a country in Western Europe known for its art, fashion, gastronomy, and the Eiffel Tower.",
  },
  {
    id: "japan",
    name: "Japan",

    capital: "Tokyo",
    population: "125 million",
    region: "East Asia",
    language: "Japanese",
    currency: "Japanese Yen",
    area: "377,975 km²",
    description: "Japan is an island nation in East Asia known for its mix of ancient traditions and cutting-edge technology.",
  },
  {
    id: "brazil",
    name: "Brazil",
    capital: "Brasília",
    population: "215 million",
    region: "South America",
    language: "Portuguese",
    currency: "Brazilian Real",
    area: "8,515,767 km²",
    description: "Brazil is the largest country in South America, famous for the Amazon rainforest and the Rio Carnival.",
  },
  {
    id: "morocco",
    name: "Morocco",
    capital: "Rabat",
    population: "37 million",
    region: "North Africa",
    language: "Arabic / Berber",
    currency: "Moroccan Dirham",
    area: "446,550 km²",
    description: "Morocco is a North African country known for its medinas, deserts, mountains, and rich cultural heritage.",
  },
  {
    id: "canada",
    name: "Canada",
    capital: "Ottawa",
    population: "38 million",
    region: "North America",
    language: "English / French",
    currency: "Canadian Dollar",
    area: "9,984,670 km²",
    description: "Canada is the second largest country in the world, known for its vast wilderness and multicultural cities.",
  },
  {
    id: "nigeria",
    name: "Nigeria",
      
    capital: "Abuja",
    population: "220 million",
    region: "West Africa",
    language: "English",
    currency: "Nigerian Naira",
    area: "923,768 km²",
    description: "Nigeria is the most populous country in Africa, known for its diverse ethnic groups and Nollywood film industry.",
  },
  {
    id: "india",
    name: "India",
  
    capital: "New Delhi",
    population: "1.4 billion",
    region: "South Asia",
    language: "Hindi / English",
    currency: "Indian Rupee",
    area: "3,287,263 km²",
    description: "India is the world's most populous democracy, known for its ancient civilization, spirituality, and diversity.",
  },
];