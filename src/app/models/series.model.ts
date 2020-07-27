export interface ISeries {
  name: string,
  genre: string[],
  season: number,
  network: string,
  premiereYear: string,
}

export interface ISeriesPagination {
  itemsCount: number;
  pageSize: number;
}
