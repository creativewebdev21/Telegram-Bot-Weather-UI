import { useAdminProvider } from "providers/AdminProvider"
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid"
import PageButton from "../PageButton"

const Pagination = () => {
  const {
    pageIndex,
    canPreviousPage,
    canNextPage,
    pageSize,
    setPageSize,
    nextPage,
    gotoPage,
    previousPage,
    pageCount,
  } = useAdminProvider()

  return (
    <div
      className="text-white font-poppins
    flex flex-col items-end gap-y-[5px]"
    >
      <p>Page {pageIndex + 1}</p>
      <div
        className="text-white
      flex items-center gap-x-[10px]"
      >
        <p>Items Per Page</p>
        <select
          className="border-gray-300 rounded-md shadow-sm 
          focus:border-indigo-300 
          focus:ring focus:ring-indigo-200 
          focus:ring-opacity-50
          text-black"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20, 50, 100, 250].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
      <div>
        <nav
          className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <PageButton
            id="first_page_pagination"
            className="rounded-l-md"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <ChevronDoubleLeftIcon className="w-6 h-6" aria-hidden="true" />
          </PageButton>
          <PageButton
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            id="previous_page_pagination"
          >
            <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
          </PageButton>
          <PageButton onClick={() => nextPage()} disabled={!canNextPage} id="next_page_pagination">
            <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
          </PageButton>
          <PageButton
            id="last_page_pagination"
            className="rounded-r-md"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <ChevronDoubleRightIcon className="w-5 h-5" aria-hidden="true" />
          </PageButton>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
