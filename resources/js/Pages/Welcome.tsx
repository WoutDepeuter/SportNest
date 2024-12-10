
import { Head } from '@inertiajs/react'

export default function Welcome({ user, test }: {user: string, test: number}) {
    return (
       <div>
           <Head title="Welcome" />
           <h1>Welcome</h1>
           <p>Hello {user} {test}, welcome to your first Inertia app wow!!</p>
       </div>
    )
}
