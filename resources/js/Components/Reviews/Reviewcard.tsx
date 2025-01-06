import Rating from "@/Components/Reviews/Rating";

type ReviewcardProps = {
    name: string;
    review: string;
    stars: number;
};

export default function Reviewcard({ name, review, stars }: ReviewcardProps) {
    return (
        <div className="review-card border-gray-400 border rounded-md max-w-sm w-full p-4 gap-8 bg-white">
            <div className={"review mx-8"}>
                <Rating stars={stars} />
                <h2 className="font-bold text-xl pt-2">{name}</h2>
                <p className="break-words">{review}</p>
            </div>
        </div>
    );
}




