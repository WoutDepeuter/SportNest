
import { Head } from '@inertiajs/react'
import Navbar from "@/Components/Navigation/Navbar";

export default function Welcome({ user, test }: {user: string, test: number}) {
    return (
       <div>
           <Navbar/>
           <Head title="Welcome" />
           <h1>Welcome</h1>
           <p>Hello {user} {test}, welcome to your first Inertia app wow!!</p>
       </div>
    )


}
