import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, ReactNode, SetStateAction } from "react";

const floatClassNames =
    "flex flex-row items-center space-x-2 rounded bg-white p-2 text-xs shadow-sm ring-1 ring-inset ring-gray-300 hover:cursor-pointer hover:bg-gray-50";

type WobbleFloatFleetprops<T> = {
    floatsProps: WobbleFloatsProps<T>[];
};

type WobbleFloatsProps<T> = {
    selected: T[];
    setSelected: Dispatch<SetStateAction<T[]>>;
    renderer: (value: T) => ReactNode;
};

type WobbleFloatProps<T> = {
    value: T;
    setSelected: Dispatch<SetStateAction<T[]>>;
    renderer: (value: T) => ReactNode;
};

function WobbleFloat<T>(props: WobbleFloatProps<T>) {
    return (
        <div
            className={floatClassNames}
            onClick={() => {
                props.setSelected((prev) =>
                    prev.filter((value) => value !== props.value),
                );
            }}
        >
            <span>{props.renderer(props.value)}</span>
            <XMarkIcon className="h-4 w-4" />
        </div>
    );
}

function WobbleFloats<T>(props: WobbleFloatsProps<T>) {
    return (
        <div className="flex flex-row justify-start space-x-2">
            {props.selected.map((value, i) => (
                <WobbleFloat
                    key={"wobblefloat_" + i}
                    value={value}
                    setSelected={props.setSelected}
                    renderer={props.renderer}
                />
            ))}
        </div>
    );
}

export default function WobbleFloatFleet<T>(
    props: WobbleFloatFleetprops<T>,
) {
    function anySelected(): boolean {
        return props.floatsProps.some((prop) => prop.selected.length > 0);
    }

    return (
        <div className="flex flex-col md:flex-row md:space-x-4 md:px-10 space-y-2">
            {anySelected() && (
                <div
                    className={floatClassNames}
                    onClick={() =>
                        props.floatsProps.forEach((prop) => prop.setSelected([]))
                    }
                >
                    <span>Verwijder alle</span>
                    <XMarkIcon className="h-4 w-4" />
                </div>
            )}

            {props.floatsProps
                .filter((p) => p.selected.length > 0)
                .map((prop, i) => (
                    <WobbleFloats
                        key={"wooblefloats_" + i}
                        selected={prop.selected}
                        setSelected={prop.setSelected}
                        renderer={prop.renderer}
                    />
                ))}
        </div>
    );
}
