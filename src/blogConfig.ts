export interface Coordinate {
  lat: number;
  lng: number;
  label?: string;
}

export interface TravelRoute {
  start: Coordinate;
  end: Coordinate;
  description: string;
}

export interface Trip {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  arcColors: string[];
  routes: TravelRoute[];
  postSlugs: string[];
}

export interface BlogConfig {
  title: string;
  description: string;
  trips: Trip[];
}

export const blogConfig: BlogConfig = {
  title: "Living the Dream!",
  description: "Embark on an enthralling ride!",
  trips: [
    {
      id: "germany-2023",
      title: "Germany",
      date: "Summer 2023",
      coverImage: "https://static.wixstatic.com/media/8dfc39_11a26cbfea224282bd208bfd4266161a~mv2.jpg/v1/fit/w_1000,h_1000,al_c,q_80/file.png",
      arcColors: ['#1d4ed8', '#60a5fa'],
      routes: [
        {
          start: { lat: 18.5204, lng: 73.8567, label: "Pune" },
          end: { lat: 50.9271, lng: 11.5892, label: "Jena" },
          description: "Pune to Jena"
        },
      ],
      postSlugs: [
        'getting-there', 
        'flying', 
        'abode', 
        'paris', 
        'berlin', 
        'stranded-in-the-swiss',
        'majestic-austria',
        'the-bohemian-beauty',
        'skydiving',
        'zugspitze',
        'italy',
        'work',
        'ciao-ciao'
      ] 
    },
    {
      id: "china-usa-2025",
      title: "China & USA",
      date: "2025",
      coverImage: "https://static.wixstatic.com/media/8dfc39_24bdca2d7f4849fa9e35f2761bbb096a~mv2.jpg/v1/fit/w_1000,h_1000,al_c,q_80/file.png",
      arcColors: ['#dc2626', '#fca5a5'],
      routes: [
        {
          start: { lat: 18.5204, lng: 73.8567, label: "Pune" },
          end: { lat: 39.9042, lng: 116.4074, label: "Beijing" },
          description: "Pune to Beijing"
        },
        {
          start: { lat: 39.9042, lng: 116.4074, label: "Beijing" },
          end: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
          description: "Beijing to San Francisco"
        }
      ],
      postSlugs: []
    }
  ]
};
