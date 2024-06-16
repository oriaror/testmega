import { IPagination } from "@/types/types"
import './pagination.css'
export const Pagination = ({prevPage, totalPages, setPage, nextPage, page}: IPagination) => {
  return <div className="pagination">
  <button onClick={prevPage} className="page">
    &larr;
  </button>
  {[...Array(totalPages).keys()].map((el) => (
    <button
      onClick={() => setPage(el + 1)}
      key={el}
      className={`page ${page === el + 1 ? "active" : ""}`}
    >
      {el + 1}
    </button>
  ))}
  <button onClick={nextPage} className="page">
    &rarr;
  </button>
</div>
}