import React from "react";
import Dropdown from "./Dropdown";

const GeneralForm = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-3/5 h-auto p-6 bg-gray-100 shadow-md rounded-md border border-gray-300">
                <h2 className="text-2xl font-bold text-center mb-6">GENERAL FORM</h2>
                <div className="flex space-x-2">

                    <div className="p-1 border border-gray-300 rounded-md w-1/4">
                        <Dropdown
                            label="SPORT:"
                            name="Sport"
                            options={[
                                { value: "sport1", label: "Tennis" },
                                { value: "sport2", label: "Basketball" },
                                { value: "sport3", label: "Swimming" },
                                { value: "sport4", label: "Soccer" },
                                { value: "sport5", label: "Running" },
                            ]}
                        />
                    </div>

                    <div className="p-1 border border-gray-300 rounded-md w-1/4">
                        <Dropdown
                            label="GEMEENTE:"
                            name="gemeente"
                            options={[
                                { value: "gemeente1", label: "Ghent" },
                                { value: "gemeente2", label: "Brussels" },
                                { value: "gemeente3", label: "Antwerp" },
                                { value: "gemeente4", label: "Bruges" },
                                { value: "gemeente5", label: "Leuven" },
                                { value: "gemeente6", label: "Hasselt" },

                            ]}
                        />
                    </div>

                    <div className="p-1 border border-gray-300 rounded-md w-1/4">
                        <Dropdown
                            label="TIME:"
                            name="time"
                            options={[
                                { value: "day", label: "Day" },
                                { value: "night", label: "Night" },
                            ]}
                        />
                    </div>

                    <div className="flex flex-col text-center p-1 border border-gray-300 rounded-md w-1/4">
                        <label
                            htmlFor="budget"
                            className="text-sm font-semibold text-gray-700 mb-2"
                        >
                            BUDGET:
                        </label>
                        <input
                            type="range"
                            id="budget"
                            name="budget"
                            min="0"
                            max="100"
                            step="1"
                            className="w-full"
                        />
                        <div className="flex justify-between text-xs mt-1 text-gray-600">
                            <span>min</span>
                            <span>max</span>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default GeneralForm;
