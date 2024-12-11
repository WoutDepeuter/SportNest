import {QuizQuestion, QuizQuestionType} from "@/Models/quiz";
import {Tag} from "@/Models/tag";

export function formatQuizQuestion(question: QuizQuestion) {
    switch (question.type) {
        case QuizQuestionType.MULTI:
            return <MultiQuizQuestion question={question}  />
        case QuizQuestionType.RANGE:
            return <RangeQuizQuestion question={question} />
    }

    throw new Error("Question of unknown type: " + question.type)
}

function MultiQuizQuestion(props: {question: QuizQuestion }) {
    const tags = props.question.data as Tag[];


    return <div></div>
}

function RangeQuizQuestion(props: {question: QuizQuestion}) {
    const tag = props.question.data as Tag;

    return <div></div>
}
