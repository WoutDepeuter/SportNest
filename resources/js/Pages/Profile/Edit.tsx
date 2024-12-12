import MainLayout from '@/Layouts/MainLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <MainLayout title="Profile">
            <div className="py-12 my-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex space-x-6 justify-between">
                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 max-w-md w-full">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                            />
                        </div>

                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 max-w-md w-full">
                            <UpdatePasswordForm />
                        </div>

                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 max-w-md w-full">
                            <DeleteUserForm />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
