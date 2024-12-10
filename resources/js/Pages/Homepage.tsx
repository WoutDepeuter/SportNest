import { Head } from '@inertiajs/react';
import React from 'react';
import GeneralForm from '../Components/Forms/generalform';

export default function Homepage() {
    return (
        <div>
            <Head title="Homepage" />
            <h1>Welcome</h1>
            <p>This is the homepage without variables.</p>
            <GeneralForm/>
        </div>
    );
}
