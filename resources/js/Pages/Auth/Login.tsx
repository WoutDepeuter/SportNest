import VerificationSVG from '@/Components/Auth/SVG/Verification';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <MainLayout title="Log in">
            <div className="max-w-lg mx-auto mt-10 flex justify-center">
                <Head title="Log in" />

                <div className="flex flex-col items-center w-full space-y-6">
                    {status && (
                        <div className="flex flex-col items-center bg-green-100 text-green-800 p-6 rounded-md shadow-lg max-w-md w-full">
                            <div className="text-5xl mb-3">
                                <span role="img" aria-label="alert">
                                    <VerificationSVG />
                                </span>
                            </div>

                            <div className="text-center text-sm font-medium">
                                {status}
                            </div>
                        </div>
                    )}

                    <div className="bg-gray-100 shadow-md rounded-lg p-8 w-full">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData('remember', e.target.checked)
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>

                                <div className="flex items-center space-x-4">
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="text-sm text-gray-600 underline hover:text-gray-900"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}

                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Log in
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>

                        <div className="mt-4 text-center">
                            <Link href="/register">
                                <a className="text-sm text-blue-500 hover:underline">
                                    Register an account
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
