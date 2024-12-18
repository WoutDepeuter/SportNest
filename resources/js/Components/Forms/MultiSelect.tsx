import {
    ChevronDownIcon,
    ChevronUpIcon,
    MinusIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

export type Props<T> = {
    title: string;
    values: T[];
    selected: T[];
    setSelected: Dispatch<SetStateAction<T[]>>;
    renderer: (t: T) => ReactNode;
};

export default function MultiSelect<T>(props: Props<T>) {
    const [query, setQuery] = useState<string>("");
    const [active, setActive] = useState<boolean>(false);
    const [more, setMore] = useState<boolean>(false);

    function CheckBox(title: string, value: T, index: number) {
        return (
            <div key={index} className="space-x-2 px-4">
                <input
                    className=""
                    type="checkbox"
                    defaultChecked={props.selected.includes(value)}
                    onChange={(e) => {
                        if (e.target.checked) {
                            props.setSelected([...props.selected, value]);
                        } else {
                            props.setSelected(props.selected.filter((v) => v != value));
                        }
                    }}
                    id={`checkbox_${index}_${title}`}
                />
                <label className="text-xs" htmlFor={`checkbox_${index}_${title}`}>
                    {props.renderer(value)}
                </label>
            </div>
        );
    }

    function CheckBoxRow() {
        const values = props.values
            .filter((v) => v != null && v.toString() != "")
            .filter(
                (v) =>
                    query === "" ||
                    v?.toString().toUpperCase().includes(query.toUpperCase()),
            )
            .toSorted();

        return (
            <div>
                <div className="py-1">
                    {values
                        .slice(0, 4)
                        .map((value, index) => CheckBox(props.title, value, index))}
                </div>
                {values.length > 4 && (
                    <div>
                        <div
                            className="flex flex-row items-center px-3 text-xs hover:cursor-pointer"
                            onClick={() => setMore(!more)}
                        >
                            {more ? (
                                <MinusIcon className="h-4 w-4" />
                            ) : (
                                <PlusIcon className="h-4 w-4" />
                            )}
                            <span className="pl-2">
                {more ? "Minder" : "Meer"} opties weergeven
              </span>
                        </div>
                        {more && (
                            <div className="py-1">
                                {values
                                    .slice(4)
                                    .map((value, index) => CheckBox(props.title, value, index))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div>
            <div
                className="inline-flex w-full justify-between gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => setActive(!active)}
            >
                {props.title}
                {active ? (
                    <ChevronUpIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                ) : (
                    <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                )}
            </div>
            {active && (
                <div
                    className={` flex origin-top-right flex-col bg-white pb-3 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 focus:outline-none`}
                >
                    <input
                        className="m-1 rounded bg-slate-50 p-1 text-xs"
                        placeholder="Zoeken"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <CheckBoxRow />
                </div>
            )}
        </div>
    );
}
