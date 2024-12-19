import MainLayout from "@/Layouts/MainLayout";
import {
  CheckIcon,
  XMarkIcon,
  TrashIcon
} from "@heroicons/react/24/outline";

export default function Dashboard() {
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

  return (
    <MainLayout title="Dashboard">
      <div className="py-12 my-12 w-2/3 mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Incoming club proposals</h2>
          <ul>
            {incomingProposals.map((proposal) => (
              <li key={proposal.id} className="mb-2">
                <div className="p-4 bg-gray-100 rounded shadow flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{proposal.name}</h3>
                    <p>{proposal.website_url}</p>
                    <p>{proposal.address.streetname}, {proposal.address.nr}, {proposal.address.postcode}, {proposal.address.location}</p>
                  </div>
                  <div className="flex space-x-2">
                    <CheckIcon className="h-8 w-8 text-green-500 cursor-pointer hover:bg-green-100 hover:border hover:border-green-300" />
                    <XMarkIcon className="h-8 w-8 text-red-500 cursor-pointer hover:bg-red-100 hover:border hover:border-red-300" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Listing the clubs:</h2>
          <ul>
            {clubs.map((club) => (
              <li key={club.id} className="mb-2">
                <div className="p-4 bg-gray-100 rounded shadow flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{club.name}</h3>
                    <p>{club.website_url}</p>
                    <p>{club.address.streetname}, {club.address.nr}, {club.address.postcode}, {club.address.location}</p>
                  </div>
                  <div className="border border-red-500 p-1 rounded hover:bg-red-100">
                    <TrashIcon className="h-8 w-8 text-red-500 cursor-pointer" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </MainLayout>
  );
}