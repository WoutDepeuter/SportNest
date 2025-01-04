import {useState} from "react";
import {Sport} from "@/Models/sport";
import {Tag} from "@/Models/tag";
import Table, {ColumnFactory} from "@/Components/Table/table_base";
import StringFilter from "@/Components/Table/Filter/StringFilter";

type Props = {
    sports: Sport[],
    tags: Tag[]
}

function submitSport(sport: Sport) {
    console.log(sport)
}

function submitTag(tag: Tag) {
    console.log(tag)
}

function EditableCell({ value, onSave }: { value: string; onSave: (newValue: string) => void }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleBlur = () => {
        setIsEditing(false);
        onSave(inputValue);
    };

    return isEditing ? (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            autoFocus
            className="px-2 py-1 border rounded"
        />
    ) : (
        <span onClick={() => setIsEditing(true)} className="cursor-pointer">
      {value}
    </span>
    );
}

export default function SportAndTagTable(props: Props) {

    const [sports, setSports] = useState(props.sports)
    const [showSports, setShowSports] = useState(false)

    const [tags, setTags] = useState(props.tags)
    const [showTags, setShowTags] = useState(false)


    const handleSportSave = (sport: Sport, field: keyof Sport, value: string) => {
        const updatedSport = { ...sport, [field]: value };
        const copy = sports.filter(s => s.id !== sport.id)
        copy.push(updatedSport)
        setSports(copy.sort((a, b) => a.id - b.id))

        submitSport(updatedSport);
    };

    const handleTagSave = (tag: Tag, field: keyof Tag, value: string) => {
        const updatedTag = { ...tag, [field]: value };
        const copy = tags.filter(t => t.id !== tag.id)
        copy.push(updatedTag)
        setTags(copy.sort((a, b) => a.id - b.id))

        submitTag(updatedTag);
    };

    const sportColumns: ColumnFactory<Sport>[] = [
        {
            header: <div className="text-center text-xs text-gray-700 uppercase bg-gray-50">
                Name
            </div>,
            render: (sport) => <div className="flex justify-center">
                <EditableCell
                    value={sport.name}
                    onSave={(value) => handleSportSave(sport, "name", value)}/>
            </div>,
            filterNode: new StringFilter((s, str) => s.name.toLowerCase().includes(str)),
            compare: (a, b) => a.name.localeCompare(b.name)
        },
        {
            header: <div className="text-center text-xs text-gray-700 uppercase bg-gray-50">
                Description
            </div>,
            render: (sport) => <div className="flex justify-center">
                <EditableCell
                    value={sport.description}
                    onSave={(value) => handleSportSave(sport, "description", value)} />
            </div>,
            filterNode: new StringFilter((s, str) => s.description.toLowerCase().includes(str)),
            compare: (a, b) => a.description.localeCompare(b.description)
        }
    ]
    const tagsColumns: ColumnFactory<Tag>[] = [
        {
            header: <div className="text-center text-xs text-gray-700 uppercase bg-gray-50">
                Name
            </div>,
            render: (sport) => <div className="flex justify-center">
                <EditableCell
                    value={sport.name}
                    onSave={(value) => handleSportSave(sport, "name", value)}/>
            </div>,
            filterNode: new StringFilter((s, str) => s.name.toLowerCase().includes(str)),
            compare: (a, b) => a.name.localeCompare(b.name)
        },
        {
            header: <div className="text-center text-xs text-gray-700 uppercase bg-gray-50">
                Description
            </div>,
            render: (sport) => <div className="flex justify-center">
                <EditableCell
                    value={sport.description}
                    onSave={(value) => handleSportSave(sport, "description", value)} />
            </div>,
            filterNode: new StringFilter((s, str) => s.description.toLowerCase().includes(str)),
            compare: (a, b) => a.description.localeCompare(b.description)
        }
    ]

    return (
        <div className="flex flex-col space-y-5">

            {showSports && <div className="m-20 p-2 bg-gray-200 rounded-2xl flex flex-col">
                <div className="flex flex-row justify-between">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-2 pb-4 relative w-3/4">
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">All Sports:</span>
                        <span
                            className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"></span>
                    </h1>

                    <div className="flex justify-end my-4 mr-12">
                        <button
                            onClick={() => setShowSports(false)}
                            className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer">
                            Hide
                        </button>
                    </div>
                </div>
                <Table values={sports} columnFactories={sportColumns}/>
            </div>}

            {!showSports && <div className="flex justify-end mt-4 mr-12">
                <button
                    onClick={() => setShowSports(true)}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer">
                    Show Sports
                </button>
            </div>}


            {showTags && <div className="m-20 p-2 bg-gray-200 rounded-2xl flex flex-col">
                <div className="flex flex-row justify-between">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-2 pb-4 relative w-3/4">
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">All Tags:</span>
                        <span
                            className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"></span>
                    </h1>

                    <div className="flex justify-end my-4 mr-12">
                        <button
                            onClick={() => setShowTags(false)}
                            className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer">
                            Hide
                        </button>
                    </div>
                </div>
                <Table values={tags} columnFactories={tagsColumns}/>
            </div>}

            {!showTags && <div className="flex justify-end mt-4 mr-12">
                <button
                    onClick={() => setShowTags(true)}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer">
                    Show Tags
                </button>
            </div>}


        </div>


    );
}
