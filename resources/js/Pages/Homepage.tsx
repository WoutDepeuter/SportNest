
import ParentReview from '@/Components/Popups/ParentReview';
import { Head } from '@inertiajs/react'
import React from 'react';

export default function Homepage() {
    return (
        <><div>
            <Head title="Homepage" />
            <h1>Welcome</h1>
            <p>This is the homepage without variables.</p>
        </div><div>
                <h1>Welcome to the Review App</h1>
                <ParentReview /> 
            </div></>
    );
}

