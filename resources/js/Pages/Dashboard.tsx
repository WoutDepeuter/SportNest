import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import ActionActionsComponent from "@/Components/Auth/AccountActions";
import {SportClub} from "@/Models/club";
import ClubTable from "@/Components/Admin/Clubs/ClubTable";


type embeddedProps = { mustVerifyEmail: boolean; status?: string, clubs: SportClub[] }
function Dashboard(props: PageProps<embeddedProps>) {

    return (
        <div className="flex flex-col space-y-5">
            <div className="m-20 p-2 bg-gray-200 rounded-2xl flex flex-col">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-2 pb-4 relative w-3/4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">Your clubs:</span>
                    <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"></span>
                </h1>
                <ClubTable clubs={props.clubs} edit={true}/>
            </div>
            <ActionActionsComponent mustVerifyEmail={props.mustVerifyEmail} status={props.status}/>
        </div>
    );
}

Dashboard.layout = (page: React.ReactNode) => <MainLayout children={page} title="Dashboard"/>

export default Dashboard;
