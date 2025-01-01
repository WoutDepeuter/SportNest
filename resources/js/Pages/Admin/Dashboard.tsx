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
      <div className="py-12 my-12 w-2/3 mx-auto">
        <ClubTable clubs={clubs} canVerify={true} />
      </div>
    </MainLayout>
  );
}
