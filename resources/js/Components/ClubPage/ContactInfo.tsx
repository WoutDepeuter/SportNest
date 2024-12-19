import PhoneSVG from "@/Components/ClubPage/SVG/PhoneSVG";
import MailSVG from "@/Components/ClubPage/SVG/MailSVG";
import BrowserSVG from "@/Components/ClubPage/SVG/BrowserSVG";
import LeaveReviewButton from "@/Components/ClubPage/LeaveReviewButton";
import ReportButton from "@/Components/ClubPage/ReportButton";
import Map from "@/Components/Map";

type ContactInfoProps = {
    website: string;
    email: string;
    phone: string;
};

export default function ContactInfo({ website, email, phone }: ContactInfoProps) {
    return (
        <div className="contact-info border-gray-200 border bg-gray-200 max-w-xs p-6 rounded-lg shadow-lg">
            <h1 className="text-xl font-semibold mb-6">Contact</h1>

            <map />

            <div className="flex flex-col space-y-6">
                <div className="flex items-center">
                    <BrowserSVG />
                    <p className="mt-0 ml-2">Website: {website}</p>
                </div>

                <div className="flex items-center">
                    <MailSVG />
                    <p className="mt-0 ml-2">Email: {email}</p>
                </div>

                <div className="flex items-center">
                    <PhoneSVG />
                    <p className="mt-0 ml-2">Phone: {phone}</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-6 items-start">
                <div className="w-auto">
                    <LeaveReviewButton />
                </div>
                <div className="w-auto">
                    <ReportButton />
                </div>
            </div>
        </div>
    );
}
