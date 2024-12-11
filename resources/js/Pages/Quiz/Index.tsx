import {Quiz} from "@/Models/quiz";

type QuizProps = {
    quiz: Quiz;
}

export default function QuizIndexComponent(props: QuizProps) {
    return (
        <div>
            {props.quiz.pages.length}
        </div>
    )
}
