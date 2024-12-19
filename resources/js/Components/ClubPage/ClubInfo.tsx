import ReviewContainer from "@/Components/Reviews/ReviewContainer";
import ContactInfo from "@/Components/ClubPage/ContactInfo";

export default function ClubInfo({ name, description, website, email, phone, equipment, events, reviews }: ClubInfoProps) {
    return (
        <div className="max-w-screen-lg mx-auto p-6 space-y-12">
            {/* Club Banner and Description */}
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold">{name}</h1>
                <p className="text-lg font-medium text-gray-700">{description}</p>
                <img
                    src="/path/to/banner-image.jpg" // Replace with the actual image path
                    alt="Club Banner"
                    className="rounded-lg shadow-md mx-auto"
                />
            </div>

            {/* Location and Contact Section */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3">
                    {/* Location */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-2">Location</h2>
                        <img
                            src="/path/to/map-image.jpg" // Replace with the actual map image path
                            alt="Map"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow mt-4">
                        <ContactInfo email={email || ''} website={website || ''} phone={phone || ''} />
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                    <ReviewContainer/>
                </div>
            </div>

            {/* Equipment Section */}
            <div>

            </div>

            {/* Events and Training Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Events and Training</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {events && events.length > 0 ? (
                        events.map((event, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                                <img src="/path/to/event-image.jpg" alt="Event" className="rounded mb-4" />
                                <p className="text-lg font-semibold">{event}</p>
                            </div>
                        ))
                    ) : (
                        <p>No events or training information available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

// Example Props Type
interface ClubInfoProps {
    name: string;
    description: string;
    website?: string;
    email?: string;
    phone?: string;
    equipment?: string[];
    events?: string[];
    reviews?: string[];
}
