import Dropdown from "@/Components/Forms/Dropdown";
import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import PostButton2 from "@/Components/Buttons/post2";

export default function ReportPopup(): JSX.Element {
    const [selectedIssue, setSelectedIssue] = useState<string>("");

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="p-6 border border-gray-300 rounded-md bg-gray-100 w-1/3 shadow-lg">
                <h1 className="font-bold text-2xl text-center mb-4">REPORT AN ISSUE</h1>

                {/* Dropdown and Input Layout */}
                <div className="flex flex-col space-y-4">
                    {/* Dropdown Label */}
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                        </label>
                        <Dropdown
                            name="type"
                            label=""
                            options={[
                                { value: "incorrect_information", label: "Incorrect Information" },
                                { value: "misconduct", label: "Misconduct or Behavior" },
                                { value: "facility_issues", label: "Facility Issues" },
                                { value: "scheduling_conflicts", label: "Scheduling Conflicts" },
                                { value: "membership_billing", label: "Membership or Billing Problems" },
                                { value: "event_complaints", label: "Event or Activity Complaints" },
                                { value: "accessibility", label: "Accessibility Concerns" },
                                { value: "safety", label: "Safety Concerns" },
                                { value: "other", label: "Other" },
                            ]}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedIssue(e.target.value)}
                        />
                    </div>

                    {/* Conditional Text Input */}
                    {selectedIssue === "other" && (
                        <TextInput
                            type="text"
                            name="otherIssue"
                            placeholder="Please describe the issue"
                            className="block w-full border border-gray-300 rounded-md p-2"
                        />
                    )}


                    <div className="flex justify-center">
                        <PostButton2 onClick={() => console.log("Button clicked")} />
                    </div>
                </div>
            </div>
        </div>
    );
}
