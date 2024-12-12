
export type Quiz = {
    pages: QuizPage[]
}

export type QuizPage = {
    title: string;
    info: string;
    questions: QuizQuestion[];
}

export type QuizQuestion = {
    label: string;
    description: string;
    type: QuizQuestionType,
    data: any,
}

export enum QuizQuestionType {
    MULTI,
    RANGE,
}
