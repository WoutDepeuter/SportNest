import React, {useEffect, useState} from "react";
import MainLayout from "@/Layouts/MainLayout";
import WobbleFloatFleet from "@/Components/Forms/WobbleFloat";
import MultiSelect from "@/Components/Forms/MultiSelect";
import {Tag} from "@/Models/tag";
import {Sport} from "@/Models/sport";
import axios from "axios";
import {SportClub} from "@/Models/club";
import ClubPreview from "@/Components/Club/ClubPreview";
import Pagination from "@/Components/Buttons/pagination";

type FilterComponentProps = {

}

function FilterClubsComponent() {

    const pageSize = 12;
    const [page, setPage] = useState<number>(1);

    const [name, setName] = useState("");

    const [tags, setTags] = useState<Tag[]>([]);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    const [sports, setSports] = useState<Sport[]>([]);
    const [selectedSports, setSelectedSports] = useState<Tag[]>([]);

    const [clubs, setClubs] = useState<SportClub[]>([]);

    function loadFilterInfo() {
        axios.get("/search/filters")
            .catch((error) => {
                console.log(error);
            }).then((res) => {
                if (res && res.data) {
                    setSports(res.data.sports);
                    setTags(res.data.tags);
                }
        })
    }

    function updateClubs() {
        axios.post("/search/filter", {
            sports: selectedSports.map(s =>s.id),
            tags: selectedTags.map(t =>t.id),
            name: name
        }).catch((error) => {
            console.log(error);
        }).then((res) => {
            if (res && res.data) {
                setClubs(res.data);
                setPage(1)
            }
        })
    }

    useEffect(() => {
        loadFilterInfo();
    }, []);
    useEffect(() => {
        updateClubs()
    }, [selectedSports, selectedTags]);

    return <div className="w-full mb-5">
            <div className="flex flex-col md:flex-row justify-center px-5 space-x-5">
                <div className="flex flex-col">
                    <div
                        className="mb-4 flex flex-col justify-start space-y-2 rounded bg-white p-5 shadow-sm ring-1 ring-inset ring-gray-300">
                        <h1 className="font-bold uppercase">Filter op naam</h1>
                        <div className="flex min-w-full flex-row items-center justify-between">
                            <input
                                className="m-1 flex w-40 grow flex-row rounded-md bg-slate-200 p-2"
                                placeholder="zoeken"
                                onChange={(e) => {setName(e.target.value)}}
                            />
                        </div>
                    </div>

                    <MultiSelect title="Tags"
                                 values={tags}
                                 selected={selectedTags}
                                 setSelected={setSelectedTags}
                                 renderer={t => t.name}
                    />

                    <MultiSelect title="Sports"
                                 values={sports}
                                 selected={selectedSports}
                                 setSelected={setSelectedSports}
                                 renderer={t => t.name}
                    />

                    <div
                        className="mt-3 inline-flex w-full items-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:cursor-pointer hover:bg-gray-200"
                        onClick={() => {updateClubs()}}
                    >
                        <span>Filter</span>
                    </div>
                </div>

                <div className="flex flex-col space-y-3">
                    <div className="flex flex-col mt-2 md:mt-0">
                        <WobbleFloatFleet floatsProps={
                            [
                                {
                                    selected: selectedTags,
                                    setSelected: setSelectedTags,
                                    renderer: t => t.name
                                },
                                {
                                    selected: selectedSports,
                                    setSelected: setSelectedSports,
                                    renderer: t => t.name
                                }
                            ]
                        }/>
                    </div>


                    <div className="grid grid-cols-3 gap-4 w-full">
                        {clubs.filter((_, idx) => {
                            return idx >= (page - 1) * pageSize && idx < page * pageSize
                        }).map(c => {
                            return <ClubPreview club={c} key={c.id}/>
                        })}
                    </div>

                </div>

            </div>
        <div className={"align-self-start"}><Pagination
            itemsPerPage={pageSize} currentPage={page} totalItems={clubs.length}
            onPageChange={(p) => {setPage(p)
            }}/>
        </div>

    </div>

}

FilterClubsComponent.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default FilterClubsComponent;
