import LeaveReviewButton from "@/Components/ClubPage/LeaveReviewButton";
import ReportButton from "@/Components/ClubPage/ReportButton";
import {EnvelopeIcon, GlobeAltIcon, PhoneIcon} from "@heroicons/react/16/solid";

type ContactInfoProps = {
    website: string;
    email: string;
    phone: string;
    sportClubId: number;
};

export default function ContactInfo({ website, email, phone, sportClubId }: ContactInfoProps) {
    const url = website.startsWith("https://") ? website : "https://" + website;

    return (
        <div className="contact-info border-gray-200 border bg-white max-w-xs p-6 rounded-lg shadow-lg">

            <div className="flex flex-col space-y-6">

                {website && <div className="flex items-center flex-row">
                    <GlobeAltIcon className="h-8 w-8"/>
                    <a href={url} target="_blank" className="mt-0 ml-2 hover:underline">{website}</a>
                </div>}

                {email && <div className="flex items-center">
                    <EnvelopeIcon className="h-8 w-8"/>
                    <p className="mt-0 ml-2">{email}</p>
                </div>}

                {phone && <div className="flex items-center">
                    <PhoneIcon className="h-8 w-8"/>
                    <p className="mt-0 ml-2">{phone}</p>
                </div>}

                <div className="flex flex-col gap-4 mt-6 items-start">
                    <div className="w-auto">
                        <LeaveReviewButton sportClubId={sportClubId} />
                    </div>
                    <div className="w-auto">
                        <ReportButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}
