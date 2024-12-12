import {Tag} from "@/Models/tag";

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

export class QuizResult {

    private loc: string = "";
    private radius: number = 0;
    protected results: Map<Tag, number> = new Map();

    public setLoc(value: string) {
        this.loc = value;
    }

    public setRadius(value: number) {
        this.radius = value;
    }

    public addResult(tag: Tag, weight: number): void {
        if (weight == 0) {
            this.results.delete(tag)
        } else {
            this.results.set(tag, weight)
        }
    }


}
