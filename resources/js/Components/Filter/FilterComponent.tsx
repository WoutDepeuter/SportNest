import React, {useEffect, useState} from "react";
import MainLayout from "@/Layouts/MainLayout";
import WobbleFloatFleet from "@/Components/Forms/WobbleFloat";
import MultiSelect from "@/Components/Forms/MultiSelect";
import {Tag} from "@/Models/tag";
import HoverLabel from "@/Components/Forms/HoverLabel";
import {Sport} from "@/Models/sport";
import axios from "axios";

type FilterComponentProps = {

}

function FilterClubsComponent() {

    const [tags, setTags] = useState<Tag[]>([]);
    const [selectedTags, setSelectedTags] = React.useState<Tag[]>([]);

    const [sports, setSports] = React.useState<Sport[]>([]);
    const [selectedSports, setSelectedSports] = React.useState<Tag[]>([]);


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

    useEffect(() => {
        loadFilterInfo();
    }, []);

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
                                 renderer={t => <HoverLabel text={t.name} hoverText={t.description}/>}
                    />

                    <MultiSelect title="Sports"
                                 values={sports}
                                 selected={selectedSports}
                                 setSelected={setSelectedSports}
                                 renderer={t => <HoverLabel text={t.name} hoverText={t.description}/>}
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
                                renderer: t => <HoverLabel text={t.name} hoverText={t.description}/>},
                            {
                                selected: selectedSports,
                                setSelected: setSelectedSports,
                                renderer: t => <HoverLabel text={t.name} hoverText={t.description}/>
                            }
                        ]
                    }/>
                </div>
            </div>
    </div>

}

FilterClubsComponent.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default FilterClubsComponent;
