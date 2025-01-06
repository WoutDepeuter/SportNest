import { StarIcon } from "@heroicons/react/24/outline";

type RatingProps = {
  stars: number;
};

function Rating({ stars }: RatingProps) {
  const maxStars = 5;

  return (
    <div className="rating flex pt-4">
      {Array.from({ length: maxStars }).map((_, index) => (
        <StarIcon
          key={index}
          className={`h-6 w-6 ${index < stars ? "text-yellow-500" : "text-gray-400"}`}
        />
      ))}
    </div>
  );
}

export default Rating;
