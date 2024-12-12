import {Head} from "@inertiajs/react";
import Navbar from "@/Components/Navigation/Navbar";
import Footer from "@/Components/Footer/Footer";

type MainLayoutProps = {
    title?: string;
    children: React.ReactNode;
}

export default function MainLayout({title, children}: MainLayoutProps) {
    if (!title) {
        title = "Sportnest";
    }

    return (
        <>
            <Head title={title}/>
            <div className="flex flex-col">
                <div className="flex flex-col h-screen">
                    <div className="flex w-full">
                        <Navbar/>
                    </div>

                    <div className="flex flex-grow overflow-hidden">

                        <div className="w-full" scroll-region="true">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <Footer/>
            </div>
        </>
    )
}
