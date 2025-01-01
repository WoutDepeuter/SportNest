import {SportClub} from "@/Models/club";
import Table, {ColumnFactory} from "@/Components/Table/table_base";
import StringFilter from "@/Components/Table/Filter/StringFilter";
import {CheckIcon, PencilIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {ListFilter, StringListFilter} from "@/Components/Table/Filter/ListFilter";
import {WrapFilter} from "@/Components/Table/Filter/WrapFilter";
import HoverLabel from "@/Components/Forms/HoverLabel";
import axios from "axios";
import {useState} from "react";

type ClubTableProps = {
    clubs: SportClub[],
    canVerify?: boolean;
    edit?: boolean;
}

export default function ClubTable(props: ClubTableProps) {
    const [clubs, setClubs] = useState(props.clubs)
    const canVerify = props.canVerify ? props.canVerify : false;
    const canEdit = props.edit ? props.edit : false;

    function verifyClub(clubId: number) {
        // TODO: Configuration popup?

        axios.post(`/admin/verify/` + clubId).catch(e => {
            console.error(e)
        }).then(res => {
            if (!res) {
                return;
            }

            if (res.status === 404) {
                // TODO: Notification?
                return;
            }

            if (res.status !== 200) {
                return;
            }

            setClubs(clubs.map(club => {
                if (club.id !== clubId) {
                    return club;
                }

                club.verified = "1" // php is such bs
                return club;
            }))
        })
    }

    function verifyComponent(club: SportClub) {
        if (canVerify) {
            return <div onClick={() => verifyClub(club.id)}>
                <HoverLabel text={<XMarkIcon
                    className="w-8 h-8 text-red-400"/>}
                            hoverText={"Click to verify"}

                />
            </div>
        }

        return <XMarkIcon className="w-8 h-8 text-red-400"/>
    }

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
                        verifyComponent(club)}
                </div>,
            filterNode: WrapFilter(new StringListFilter(["Verified", "Unverified"]),
                (club) => club.verified === "1" ? "Verified" : "Unverified"),
        }
    ];

    if (canEdit) {
        columns.push({
            header: <div className="text-center text-xs text-gray-700 uppercase bg-gray-50">
                Actions?
            </div>,
            render: (club) => <div className="flex flex-row justify-center">
                <a href={"/clubowner/club/edit/" + club.id}>
                    <HoverLabel text={<PencilIcon className="w-8 h-8" />} hoverText={"Edit"} />
                </a>
            </div>
        })
    }

    return <div className="flex flex-grow flex-col">
        <div className="flex flex-grow justify-center">
        <Table columnFactories={columns} values={clubs}/>
        </div>
    </div>
}
