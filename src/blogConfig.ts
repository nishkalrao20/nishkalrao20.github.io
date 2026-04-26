export interface Coordinate {
  lat: number;
  lng: number;
  label?: string;
}

export interface TravelRoute {
  id: string;
  start: Coordinate;
  end: Coordinate;
  vehicle: 'plane' | 'car' | 'train';
  date: string;
  description: string;
  blogPostSlug?: string;
}

export interface BlogConfig {
  title: string;
  description: string;
  routes: TravelRoute[];
}

export const blogConfig: BlogConfig = {
  title: "Living the Dream!",
  description: "Exploring the world!",
  routes: [
    {
      id: "pune-to-jena",
      start: { lat: 18.5204, lng: 73.8567, label: "Pune" },
      end: { lat: 50.9271, lng: 11.5892, label: "Jena" },
      vehicle: "plane",
      date: "2024",
      description: "DAAD WISE Fellowship trip to Germany.",
      blogPostSlug: "germany-daad-2024"
    },
  ]
};
