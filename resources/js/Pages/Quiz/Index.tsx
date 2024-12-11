import {Quiz, QuizPage} from "@/Models/quiz";
import Navbar from "@/Components/Navigation/Navbar";
import Footer from "@/Components/Footer/Footer";
import {useEffect, useState} from "react";
import {WaitingGlass} from "@/Components/Animations/LoadingHourGlass";
import QuizPageComponent from "@/Components/Quiz/QuizPage";
import Pagination from "@/Components/Buttons/pagination";

type QuizProps = {
    quiz: Quiz;
}

export default function QuizIndexComponent(props: QuizProps) {
    const [pageIdx, setPageIdx] = useState<number>(0);
    const [page, setPage] = useState<QuizPage | null>(null);

    useEffect(() => {
        if (props.quiz.pages.length <= pageIdx) {
            throw new Error("Page index out of range")
        }

        const page = props.quiz.pages[pageIdx];
        setPage(page);
    }, [pageIdx]);

    if (!page) {
        return <div>
            <Navbar />
            <div className="flex flex-grow h-full items-center justify-center">
                <WaitingGlass />
            </div>
            <Footer />
        </div>
    }

    return (
        <div>
            <Navbar />

            <div className="flex flex-col flex-grow h-full items-center justify-center space-y-2">
                {page && <QuizPageComponent page={page}  />}

                <Pagination
                    hasPrevious={() => pageIdx !== 0}
                    back={() => setPageIdx(Math.max(0, pageIdx-1) % props.quiz.pages.length)}
                    next={() => setPageIdx(pageIdx+1 % props.quiz.pages.length)}
                    hasNext={() => pageIdx < props.quiz.pages.length-1}
                />
            </div>



            <Footer />
        </div>
    )
}
