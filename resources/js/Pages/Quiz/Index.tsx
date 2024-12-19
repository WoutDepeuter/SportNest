import {Quiz, QuizPage, QuizResult} from "@/Models/quiz";
import React, {useEffect, useState} from "react";
import {WaitingGlass} from "@/Components/Animations/LoadingHourGlass";
import QuizPageComponent from "@/Components/Quiz/QuizPage";
import Pagination, {SoloPagination} from "@/Components/Buttons/pagination";
import MainLayout from "@/Layouts/MainLayout";
import {Tag} from "@/Models/tag";
import {SportClub} from "@/Models/club";
import axios from "axios";
import ClubPreview from "@/Components/Club/ClubPreview";

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
    const [quizResult, _] = useState<QuizResult>(new QuizResult());

    const [res, setRes] = useState<SportClub[]>([])

    function updateWeight(tag: Tag, weight: number) {
        quizResult.addResult(tag, weight);
    }

    function submit() {
        console.log(quizResult)
        axios.post("/quiz/result", quizResult)
            .catch(err => {
                console.log(err)
            }).then(res =>  {
                if (res && res.data) {
                    setRes(res.data)
                }
            })
    }

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

    if (res.length) {
        return <div className="grid grid-cols-3 gap-4 w-full">
            {res.map(c => {
                return <ClubPreview club={c} key={c.id}/>
            })}
        </div>
    }

    return (
        <div className="flex flex-col flex-grow h-full items-center justify-between py-10 space-y-2">

            <div className="w-full px-5">
            <h1 className="text-2xl">Orientation Quiz</h1> {/** TODO: Style?? **/}
            </div>

            <div className="flex flex-row space-x-5 w-full justify-between h-full px-20">

                <div className="w-1/2 flex justify-center">
                    <img className="w-3/4 rounded-2xl shadow-xl" src={quizImage(pageIdx)} alt="Random image related to sports"/>
                </div>

                <div className="flex flex-col w-1/2 space-y-2">
                    <div className="w-full h-full">
                        <QuizPageComponent page={page} callback={updateWeight}/>
                    </div>

                    <div className="flex flex-row w-full justify-center">
                        <SoloPagination
                            hasPrevious={() => pageIdx !== 0}
                            back={() => setPageIdx(Math.max(0, pageIdx - 1) % props.quiz.pages.length)}
                            next={() => setPageIdx(pageIdx + 1 % props.quiz.pages.length)}
                            hasNext={() => pageIdx < props.quiz.pages.length - 1}
                            classes="flex-row w-4/5"
                        />
                        <button onClick={() => submit()}>
                            check
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

QuizIndexComponent.layout = (page: React.ReactNode) => <MainLayout title="Sportnest - Quiz" children={page}/>;

export default QuizIndexComponent;
