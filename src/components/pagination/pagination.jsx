export function Pagination({hasPrevPage, hasNextPage, goNextPage, goPrevPage}) {
    return (
        <div>
            <button onClick={goPrevPage} disabled={hasPrevPage}>
                Previous
            </button>
            <button onClick={goNextPage} disabled={hasNextPage}>
                Next
            </button>
        </div>
    )
}
