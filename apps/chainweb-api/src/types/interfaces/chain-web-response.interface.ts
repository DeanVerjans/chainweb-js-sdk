export interface ResponseList<T> {
  limit: number;
  items: T[];
  next: string;
}
