import {QuizPage} from "@/Models/quiz";


export default function QuizPageComponent(props: {page: QuizPage}) {
    const page = props.page;
    return <div>
        {page.title}
    </div>
}
