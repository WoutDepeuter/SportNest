import MainLayout from "@/Layouts/MainLayout";
import {
  CheckIcon,
  XMarkIcon,
  TrashIcon
} from "@heroicons/react/24/outline";
import ClubTable from "@/Components/Admin/Clubs/ClubTable";
import {SportClub} from "@/Models/club";

export default function Dashboard({clubs}: {clubs: SportClub[]}) {
  return (
      <MainLayout title="Dashboard">

          <div className="m-20 p-2 bg-gray-200 rounded-2xl flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-2 pb-4 relative w-3/4">
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">All clubs:</span>
                  <span
                      className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"></span>
              </h1>
              <ClubTable clubs={clubs} canVerify={true}/>
          </div>
      </MainLayout>
  );
}
