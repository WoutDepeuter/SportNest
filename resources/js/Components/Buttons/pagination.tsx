import { MouseEventHandler } from "react";

export default function Pagination({ onClick }: { onClick: MouseEventHandler }) {
    return (
        <div className="inline-flex">
            <button
                onClick={() => {
                    alert('event');
                  }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
                Prev
            </button>
            <button
                onClick={() => {
                    alert('event');
                  }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
                Next
            </button>

            
        </div>
    );
}
