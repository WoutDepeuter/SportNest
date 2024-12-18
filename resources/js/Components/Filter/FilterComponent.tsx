import React, {useEffect, useState} from "react";
import MainLayout from "@/Layouts/MainLayout";
import WobbleFloatFleet from "@/Components/Forms/WobbleFloat";
import MultiSelect from "@/Components/Forms/MultiSelect";
import {Tag} from "@/Models/tag";
import {Sport} from "@/Models/sport";
import axios from "axios";
import {SportClub} from "@/Models/club";

type FilterComponentProps = {

}

function FilterClubsComponent() {

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
            tags: selectedTags.map(t =>t.id)
        }).catch((error) => {
            console.log(error);
        }).then((res) => {
            if (res && res.data) {
                setClubs(res.data);
            }
        })
    }

    useEffect(() => {
        loadFilterInfo();
    }, []);
    useEffect(() => {
        updateClubs()
    }, [selectedSports, selectedTags]);

    return <div>
            <div className="flex flex-col md:flex-row justify-center ">
                <div className="flex flex-col">
                    <div
                        className="mb-4 flex flex-col justify-start space-y-2 rounded bg-white p-5 shadow-sm ring-1 ring-inset ring-gray-300">
                        <h1 className="font-bold uppercase">Filter op naam</h1>
                        <div className="flex min-w-full flex-row items-center justify-between">
                            <input
                                className="m-1 flex w-40 grow flex-row rounded-md bg-slate-200 p-2"
                                placeholder="zoeken"
                                onChange={(e) => {}}
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
                        onClick={() => {}}
                    >
                        <span>Filter</span>
                    </div>
                </div>

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

                <div>
                    {clubs.map(c => {
                        return <div>{c.name}</div>
                    })}
                </div>

            </div>
    </div>

}

FilterClubsComponent.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default FilterClubsComponent;
