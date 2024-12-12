export function GenericButton(label: string, url: string) {
    return (
        <a href={url} className="inline-flex items-center bg-gray-200 text-2xl font-bold px-6 py-3 border border-gray-400 rounded-lg m-4 shadow-md hover:bg-gray-300">
            {label}
        </a>
    );
}

export function LeaveReviewButton() {
    return GenericButton("LEAVE A REVIEW", "/review");
}

export function ReportButton() {
    return GenericButton("REPORT AN ISSUE", "/report");
}
