import React from "react";

interface DropdownProps {
    label: string;
    name: string;
    options: { value: string; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, name, options }) => {
    return (
        <div className="flex items-center justify-between">
            <label htmlFor={name} className="text-sm text-gray-700 w-1/4">{label}</label>
            <select id={name} name={name} className="p-1 text-xs border border-gray-300 rounded-md w-3/4">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
