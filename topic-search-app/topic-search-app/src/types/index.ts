export interface Topic {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface SearchResults {
  topics: Topic[];
  totalResults: number;
}