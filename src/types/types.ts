export type Card = {
  name: string,
  description: string,
  image: string,
  price: string
}

export interface UsePaginationProps {
  contentPerPage: number;
  count: number;
}

export interface UsePaginationReturn {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  firstContentIndex: number;
  lastContentIndex: number;
  gaps: { before: boolean; paginationGroup: number[]; after: boolean };
}

export interface IPagination {
  prevPage: () => void,
  totalPages: number,
  setPage: (page: number) => void,
  nextPage: () => void,
  page: number
}

export type UsePagination = (UsePaginationProps: UsePaginationProps) => UsePaginationReturn;