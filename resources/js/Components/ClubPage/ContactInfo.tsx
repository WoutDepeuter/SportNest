import {EnvelopeIcon, GlobeAltIcon, PhoneIcon} from "@heroicons/react/24/outline";

type ContactInfoProps = {
    website: string;
    email: string;
    phone: string;
};

export default function ContactInfo({ website, email, phone }: ContactInfoProps) {
    return (
        <div className="contact-info border-gray-200 border bg-gray-200 max-w-xs p-6 rounded-lg shadow-lg">
            <h1 className="text-xl font-semibold mb-6">Contact</h1>

            <div className="flex flex-col space-y-6">
                <div className="flex items-center">
                    <GlobeAltIcon />
                    <p className="mt-0 ml-2">Website: {website}</p>
                </div>

                <div className="flex items-center">
                    <EnvelopeIcon />
                    <p className="mt-0 ml-2">Email: {email}</p>
                </div>

                <div className="flex items-center">
                    <PhoneIcon />
                    <p className="mt-0 ml-2">Phone: {phone}</p>
                </div>
            </div>
        </div>
    );
}
