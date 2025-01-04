import MainLayout from "@/Layouts/MainLayout";
import {
  CheckIcon,
  XMarkIcon,
  TrashIcon
} from "@heroicons/react/24/outline";
import ClubTable from "@/Components/Admin/Clubs/ClubTable";
import {SportClub} from "@/Models/club";
import {useState} from "react";

export default function Dashboard({clubs}: {clubs: SportClub[]}) {
    const [showClubs, setShowClubs] = useState(true)


  return (
      <MainLayout title="Dashboard">

          {showClubs && <div className="m-20 p-2 bg-gray-200 rounded-2xl flex flex-col">
              <div className="flex flex-row justify-between">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-2 pb-4 relative w-3/4">
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">All clubs:</span>
                      <span
                          className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"></span>
                  </h1>

                  <div className="flex justify-end my-4 mr-12">
                      <button
                          onClick={() => setShowClubs(false)}
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer">
                          Hide
                      </button>
                  </div>
              </div>
              <ClubTable clubs={clubs} canVerify={true}/>
          </div>}

          {!showClubs && <div className="flex justify-end mt-4 mr-12">
              <button
                  onClick={() => setShowClubs(true)}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer">
                  Show clubs
              </button>
          </div>}

      </MainLayout>
  );
}
