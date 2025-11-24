export default function Pagination({ page, totalPages, onPageChange }) {
    return (
        <div style={{ marginTop: 20 }}>
            {(page > 1) &&
                <button
                    onClick={() => onPageChange(page - 1)}
                    disabled={page === 1}
                >
                    Anterior
                </button>}

            <span style={{ margin: "0 10px" }}>
                Página {page} de {totalPages}
            </span>

            {(page < totalPages) &&
                <button
                    onClick={() => onPageChange(page + 1)}
                >
                    Siguiente
                </button>}
        </div>
    );
}
