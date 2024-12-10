import React from 'react';
import Dropdown from './Dropdown';

const GeneralForm = () => {
    return (
        <form className="max-w-5xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">GENERAL FORM</h2>
            <div className="flex justify-between space-x-4">
                {/* Sport Dropdown */}
                <Dropdown
                    label="SPORT:"
                    name="Sport"
                    options={[
                        { value: 'sport1', label: 'Tennis' },
                        { value: 'sport2', label: 'Basketball' },
                        { value: 'sport3', label: 'Swimming' },
                        { value: 'sport4', label: 'Soccer' },
                        { value: 'sport5', label: 'Running' }
                    ]}
                />

                {/* Gemeente Dropdown */}
                <Dropdown
                    label="GEMEENTE:"
                    name="gemeente"
                    options={[
                        { value: 'gemeente1', label: 'Ghent' },
                        { value: 'gemeente2', label: 'Brussels' },
                        { value: 'gemeente3', label: 'Antwerp' }
                    ]}
                />

                {/* Time Dropdown */}
                <Dropdown
                    label="TIME:"
                    name="dropdown4"
                    options={[
                        { value: 'option1', label: 'Day' },
                        { value: 'option2', label: 'Night' }
                    ]}
                />

                {/* Budget Slider */}
                <div className="flex flex-col w-1/4">
                    <label htmlFor="budget" className="text-sm font-semibold text-gray-700">BUDGET:</label>
                    <input type="range" id="budget" name="budget" min="0" max="100" step="1" className="w-full mt-1" />
                    <div className="flex justify-between text-xs">
                        <span>min</span>
                        <span>max</span>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default GeneralForm;
