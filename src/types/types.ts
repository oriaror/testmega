export type Card = {
  id: string,
  name: string,
  description: string,
  image: string,
  price: string,
  onDelete?: (id: string) => void
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