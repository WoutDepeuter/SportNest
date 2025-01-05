import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import ActionActionsComponent from "@/Components/Auth/AccountActions";
import {SportClub} from "@/Models/club";
import ClubTable from "@/Components/Admin/Clubs/ClubTable";
import {useEffect, useState} from "react";
import axios from "axios";


type embeddedProps = { mustVerifyEmail: boolean; status?: string, clubs: SportClub[] }
function Dashboard(props: PageProps<embeddedProps>) {
    const [admin, setAdmin] = useState(false)
    function loadAdmin() {
        axios.get('/isAdmin').then(res => {
            if (res && res.data) {
                setAdmin(res.data.isAdmin)
            }
        })
    }

    useEffect(() => {
        loadAdmin()
    }, []);

    return (
        <div className="flex flex-col space-y-5">
            {admin && <div className="flex justify-end mt-4 mr-12">
                <a
                    href={route("admin.dashboard")}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer">
                    Admin
                </a>
            </div>}
            <div className="m-20 p-2 bg-gray-200 rounded-2xl flex flex-col">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-2 pb-4 relative w-3/4">
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">Your clubs:</span>
                    <span
                        className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"></span>
                </h1>
                <ClubTable clubs={props.clubs} edit={true}/>
                <div className="flex justify-end mt-4">
                    <a
                        href={route("club.new")}
                        className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer">
                        + Add Club
                    </a>
                </div>
            </div>
            <ActionActionsComponent mustVerifyEmail={props.mustVerifyEmail} status={props.status}/>
        </div>
    );
}

Dashboard.layout = (page: React.ReactNode) => <MainLayout children={page} title="Dashboard"/>

export default Dashboard;
