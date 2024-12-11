type PaginationProps = {
    back: () => void;
    next: () => void;
    hasNext: () => boolean;
    hasPrevious: () => boolean;
}

export default function Pagination(props: PaginationProps) {
    return (
        <div className="inline-flex">
            {props.hasPrevious() && <button
                onClick={() => {
                    props.back();
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
                Prev
            </button>}

            {props.hasNext() && <button
                onClick={() => {
                    props.next();
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
                Next
            </button>}


        </div>
    );
}
