import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm";

type props = { mustVerifyEmail: boolean; status?: string }

export default function ActionActionsComponent({mustVerifyEmail, status}: props) {
    return <div className="py-12 my-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex space-x-6 justify-between">
                <div className="bg-gray-100 p-4 shadow sm:rounded-lg sm:p-8 max-w-md w-full">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                </div>

                <div className="bg-gray-100 p-4 shadow sm:rounded-lg sm:p-8 max-w-md w-full">
                    <UpdatePasswordForm/>
                </div>

                <div className="bg-gray-100 p-4 shadow sm:rounded-lg sm:p-8 max-w-md w-full">
                    <DeleteUserForm/>
                </div>
            </div>
        </div>
    </div>
}
