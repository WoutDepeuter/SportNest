import React, {Dispatch, SetStateAction, FC} from "react";

interface DropdownProps {
    label: string;
    name: string;
    options: { value: string; label: string }[];
    defaultValue?: string;
    onChange?: Dispatch<SetStateAction<string>>;
}

const Dropdown: FC<DropdownProps> = (props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (props.onChange) props.onChange(value);
    };

    return (
        <div className="flex items-center justify-between">
            <label htmlFor={props.name} className="text-sm text-gray-700 w-1/4">{props.label}</label>
            <select
                id={props.name}
                name={props.name}
                value={props.defaultValue}
                onChange={handleChange}
                className="p-1 text-xs border border-gray-300 rounded-md w-3/4"
            >
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
