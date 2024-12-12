import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Profile/Partials/DeleteUserForm';
import UpdatePasswordForm from './Profile/Partials/UpdatePasswordForm';
import { PageProps } from '@/types';
import UpdateProfileInformation from './Profile/Partials/UpdateProfileInformationForm';
import { Link } from '@inertiajs/react';

export default function Dashboard({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    
    return (
        <MainLayout title="Dashboard">
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                    <Link href="/clubowner/profile">
                        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl">
                            Go to Club Owner Profile
                        </a>
                    </Link>
                </div>
                </div>
            </div>
        </MainLayout>
    );
}
