import {SportClub} from "@/Models/club";
import {Titleize} from "@/Functions/strings";

type ClubPreviewProps = {
    club: SportClub
}

export default function ClubPreview(props: ClubPreviewProps) {
    const club = props.club;

    return  <div className="flex items-center p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
        <div className="flex-1">
            <h2 className="text-xl font-bold">{Titleize(club.name)}</h2>
            <p className="text-gray-600">
                Adress placeholder
            </p>
            <a
                href={club.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                {club.website_url}
            </a>
        </div>
        <div className="ml-4">
            <img
                src="https://via.placeholder.com/100"
                alt="Club logo/placeholder"
                className="w-24 h-24 rounded-full object-cover"
            />
        </div>
    </div>
}
