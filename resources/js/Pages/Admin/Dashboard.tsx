import MainLayout from "@/Layouts/MainLayout";
import {
  CheckIcon,
  XMarkIcon,
  TrashIcon
} from "@heroicons/react/24/outline";
import ClubTable from "@/Components/Admin/Clubs/ClubTable";
import {SportClub} from "@/Models/club";

export default function Dashboard({clubs}: {clubs: SportClub[]}) {
  const incomingProposals = [
    {
      id: 1,
      name: "Proposed Club 1",
      website_url: "http://proposedclub1.com",
      address: {
        streetname: "Main St",
        nr: "123",
        postcode: "12345",
        location: "City A",
      },
    },
    {
      id: 2,
      name: "Proposed Club 2",
      website_url: "http://proposedclub2.com",
      address: {
        streetname: "Second St",
        nr: "456",
        postcode: "67890",
        location: "City B",
      },
    },
  ];

  /*
  const clubs = [
    {
      id: 1,
      name: "Sport Club 1",
      website_url: "http://sportclub1.com",
      address: {
        streetname: "Third St",
        nr: "789",
        postcode: "11223",
        location: "City C",
      },
    },
    {
      id: 2,
      name: "Sport Club 2",
      website_url: "http://sportclub2.com",
      address: {
        streetname: "Fourth St",
        nr: "101",
        postcode: "44556",
        location: "City D",
      },
    },
  ];
*/
  return (
    <MainLayout title="Dashboard">
      <div className="py-12 my-12 w-2/3 mx-auto">
        <ClubTable clubs={clubs} />
      </div>
    </MainLayout>
  );
}
