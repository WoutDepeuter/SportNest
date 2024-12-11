import {Quiz, QuizPage} from "@/Models/quiz";
import {useEffect, useState} from "react";
import {WaitingGlass} from "@/Components/Animations/LoadingHourGlass";
import QuizPageComponent from "@/Components/Quiz/QuizPage";
import Pagination from "@/Components/Buttons/pagination";
import MainLayout from "@/Layouts/MainLayout";

type QuizProps = {
    quiz: Quiz;
}

const QUIZ_IMAGES: string[] = ["swimming.jpeg"];

function quizImage(idx: number): string {
    return "/images/quiz/" + QUIZ_IMAGES[idx % QUIZ_IMAGES.length];
}

function QuizIndexComponent(props: QuizProps) {
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
            <div className="flex flex-grow h-full items-center justify-center">
                <WaitingGlass/>
            </div>
        </div>
    }

    return (
        <div className="flex flex-col flex-grow h-full items-center justify-between py-10 space-y-2">

            <div className="flex flex-row space-x-5 w-full justify-between h-full px-20">

                <div className="w-1/2 flex justify-center">
                    <img className="w-3/4 rounded-2xl shadow-xl" src={quizImage(pageIdx)} alt="Random image related to sports"/>
                </div>

                <div className="flex w-1/2">
                    <QuizPageComponent page={page}/>
                </div>
            </div>

            <Pagination
                hasPrevious={() => pageIdx !== 0}
                back={() => setPageIdx(Math.max(0, pageIdx - 1) % props.quiz.pages.length)}
                next={() => setPageIdx(pageIdx + 1 % props.quiz.pages.length)}
                hasNext={() => pageIdx < props.quiz.pages.length - 1}
            />
        </div>
    )
}

QuizIndexComponent.layout = (page: React.ReactNode) => <MainLayout title="Sportnest - Quiz" children={page}/>;

export default QuizIndexComponent;
