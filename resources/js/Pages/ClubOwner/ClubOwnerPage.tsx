import {SportClub} from "@/Models/club";
import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import Table, {ColumnFactory} from "@/Components/Table/table_base";
import StringFilter from "@/Components/Table/Filter/StringFilter";
import {CheckIcon, PencilIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {WrapFilter} from "@/Components/Table/Filter/WrapFilter";
import {StringListFilter} from "@/Components/Table/Filter/ListFilter";
import HoverLabel from "@/Components/Forms/HoverLabel";

type ClubOwnerPageProps = {
    clubs: SportClub[]
}

function ClubOwnerPage({clubs}: ClubOwnerPageProps) {

    function deleteClub(id: number) {}
    function editClub(id: number) {}


    const columns: ColumnFactory<SportClub>[] = [
        {
            header:
                <div className="text-center text-xs text-gray-700 uppercase bg-gray-50">
                    Name
                </div>,
            render: (club) =>
                <div className="text-center hover:underline">
                    <a href={"/club/" + club.id}>{club.name}</a>
                </div>,
            filterNode: new StringFilter((c, s) => c.name.toLowerCase().includes(s)),
            compare: (c1, c2) => c1.name.localeCompare(c2.name)
        },
        {
            header:
                <div className="text-center text-xs text-gray-700 uppercase bg-gray-50">
                    Website
                </div>,
            render: (club) =>
                <div className="text-center hover:underline hover:text-blue-600">
                    <a href={club.website_url} target="_blank">{club.website_url}</a>
                </div>,
            filterNode: new StringFilter((c, s) => c.website_url.toLowerCase().includes(s)),
            compare: (c1, c2) => c1.website_url.localeCompare(c2.website_url)
        },
        {
            header:
                <div className="text-center text-xs text-gray-700 uppercase bg-gray-50">
                    Verified?
                </div>,
            render: (club) =>
                <div className="flex flex-row justify-center">
                    {club.verified === "1" ?
                        <CheckIcon className="w-8 h-8 text-green-400" /> :
                        <XMarkIcon className="w-8 h-8 text-red-400" />
                    }
                </div>,
            filterNode: WrapFilter(new StringListFilter(["Verified", "Unverified"]),
                (club) => club.verified === "1" ? "Verified" : "Unverified"),
        },
        {
            header:
                <div className="text-center text-xs text-gray-700 uppercase bg-gray-50">
                    Actions
                </div>,
            render: (club) =>
                    <div className="flex flex-row space-x-4 justify-center">
                        <HoverLabel text={<XMarkIcon className="w-8 h-8 text-red-400" />}
                                    hoverText="Delete"
                                    onClick={() => deleteClub(club.id)}
                                    className="relative inline-block"
                        />
                        <HoverLabel text={<PencilIcon className="w-8 h-8" />}
                                    hoverText="Edit"
                                    onClick={() => editClub(club.id)}
                                    className="relative inline-block"
                        />
                    </div>

        }
    ];

    return <div className="flex flex-grow flex-col">
        <div className="text-3xl font-bold p-8">
            Your Clubs
        </div>
        <div className="flex flex-grow justify-center p-12">
            <Table columnFactories={columns} values={clubs}/>
        </div>
    </div>

}

ClubOwnerPage.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default ClubOwnerPage;
