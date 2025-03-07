import {QuizPage, QuizResult} from "@/Models/quiz";
import {formatQuizQuestion} from "@/Components/Quiz/QuizQuestion";
import {Paragraphize, Titleize} from "@/Functions/strings";
import {Tag} from "@/Models/tag";

type QuizPageProps = {
    page: QuizPage;
    callback: (tag: Tag, weight: number) => void;
}

export default function QuizPageComponent(props: QuizPageProps) {
    const page = props.page;
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md w-full h-full">
            <header className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{Titleize(page.title)}</h1>
                {page.info && <p className="text-gray-600">{Paragraphize(page.info)}</p>}
            </header>

            <div className="space-y-6">
                {page.questions.map((question, index) => (
                    <div key={index}>
                        {formatQuizQuestion(question, props.callback)}
                    </div>
                ))}
            </div>
        </div>
    );
}
