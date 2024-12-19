import {ChatBubbleBottomCenterTextIcon} from "@heroicons/react/24/outline";

export default function ReportButton() {
    return (
        <a
            href="/report"
            className="inline-flex items-center bg-gray-200 text-2xl font-bold px-6 py-3 border border-gray-400 rounded-lg m-4 shadow-md hover:bg-gray-300"
        >
            REPORT A ISSUE
            <ChatBubbleBottomCenterTextIcon />
        </a>
    );
}
