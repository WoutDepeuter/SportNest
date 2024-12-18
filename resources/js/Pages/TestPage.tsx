import React from 'react';
import Map from '../Components/Map'; // Import the Map component
import ReportPopup from '../Components/Popups/ReportPopup'; // Import the ReportPopup component
import '../../css/app.css';
import MainLayout from "@/Layouts/MainLayout";

function TestPage(): JSX.Element {
    return (
        <div>
            <h1>Test Page</h1>
            <ReportPopup></ReportPopup>
        </div>
    );
}

TestPage.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default TestPage;
