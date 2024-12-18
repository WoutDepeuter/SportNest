type ClubInfoProps = {
    name: string;
    description: string;
};

export default function ClubInfo({ name, description }: ClubInfoProps) {
    return (

        <div className="max-w-screen-lg mx-auto p-6">
            <h1> </h1>

            <h1 className="text-4xl font-extrabold text-center mb-4">{name}</h1>

            {/* Description */}
            <h1 className={"text-4xl font-extrabold "}>Description</h1>
            <p className="text-lg text-center font-semibold mb-8">
                {description}
            </p>

            {/* Image Section */}
            <div className="flex justify-center">
                <img
                    src=""
                    alt=""
                    className=""
                />
            </div>
        </div>
    );
}
